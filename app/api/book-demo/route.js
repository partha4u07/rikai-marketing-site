import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// ─── Formatting helpers ───────────────────────────────────────────────────────

function formatSlotLong(slot) {
  const d = new Date(slot.date.year, slot.date.month, slot.date.day);
  const dateStr = d.toLocaleDateString('en-IN', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
  });
  return `${dateStr} at ${slot.time} IST`;
}

function formatSlotShort(slot) {
  const d = new Date(slot.date.year, slot.date.month, slot.date.day);
  return d.toLocaleDateString('en-IN', { weekday: 'short', month: 'short', day: 'numeric' }) + ' · ' + slot.time;
}

// ─── Email templates ──────────────────────────────────────────────────────────

function teamEmailHTML({ name, company, email, phone, slots, guests, notes }) {
  const slotsHTML = slots
    .map((s, i) => `
      <tr>
        <td style="padding:6px 12px 6px 0;color:#a78bfa;font-weight:700;white-space:nowrap;vertical-align:top">#${i + 1}</td>
        <td style="padding:6px 0;color:#f0f0ff">${formatSlotLong(s)}</td>
      </tr>`)
    .join('');

  const guestsLine = guests.length
    ? `<p style="margin:0 0 8px"><span style="color:#a78bfa;font-weight:600">Guests:</span> ${guests.join(', ')}</p>`
    : '';

  const notesLine = notes
    ? `<div style="margin-top:20px;padding:16px;background:#1a1a2e;border-left:3px solid #7c3aed;border-radius:4px"><p style="margin:0 0 6px;color:#a78bfa;font-weight:600;font-size:12px;text-transform:uppercase;letter-spacing:.06em">Notes from prospect</p><p style="margin:0;color:#d4d4f0;line-height:1.6">${notes}</p></div>`
    : '';

  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#08081a;font-family:'Segoe UI',Arial,sans-serif">
  <div style="max-width:580px;margin:40px auto;background:#0f0f1e;border:1px solid rgba(124,58,237,0.25);border-radius:16px;overflow:hidden">
    <div style="background:linear-gradient(135deg,#7c3aed,#4f6ef7);padding:28px 32px">
      <p style="margin:0 0 4px;color:rgba(255,255,255,0.7);font-size:12px;letter-spacing:.08em;text-transform:uppercase">New Demo Request</p>
      <h1 style="margin:0;color:#fff;font-size:22px;font-weight:800">${name}</h1>
      <p style="margin:4px 0 0;color:rgba(255,255,255,0.75);font-size:14px">${company}</p>
    </div>
    <div style="padding:28px 32px">
      <p style="margin:0 0 8px"><span style="color:#a78bfa;font-weight:600">Email:</span> <a href="mailto:${email}" style="color:#818cf8">${email}</a></p>
      ${phone ? `<p style="margin:0 0 8px"><span style="color:#a78bfa;font-weight:600">Phone:</span> <span style="color:#f0f0ff">${phone}</span></p>` : ''}
      ${guestsLine}

      <hr style="border:none;border-top:1px solid rgba(255,255,255,0.07);margin:20px 0">

      <p style="margin:0 0 12px;color:#a78bfa;font-weight:600;font-size:12px;text-transform:uppercase;letter-spacing:.06em">Preferred Slots (in priority order)</p>
      <table style="border-collapse:collapse;width:100%">${slotsHTML}</table>

      ${notesLine}

      <hr style="border:none;border-top:1px solid rgba(255,255,255,0.07);margin:24px 0">
      <p style="margin:0;color:rgba(240,240,255,0.35);font-size:12px">Submitted via rikai.tech · Rik AI Demo Booking</p>
    </div>
  </div>
</body>
</html>`;
}

function confirmationEmailHTML({ name, slots }) {
  const slotsHTML = slots
    .map((s, i) => `<li style="margin-bottom:6px;color:#d4d4f0"><span style="color:#a78bfa;font-weight:700">#${i + 1}</span> ${formatSlotLong(s)}</li>`)
    .join('');

  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f4f4f8;font-family:'Segoe UI',Arial,sans-serif">
  <div style="max-width:560px;margin:40px auto;background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08)">
    <div style="background:linear-gradient(135deg,#7c3aed,#4f6ef7);padding:28px 32px;text-align:center">
      <h1 style="margin:0;color:#fff;font-size:22px;font-weight:800">We've got your request!</h1>
      <p style="margin:8px 0 0;color:rgba(255,255,255,0.8);font-size:14px">Hi ${name}, your demo slots have been received</p>
    </div>
    <div style="padding:28px 32px">
      <p style="color:#444;line-height:1.7">We've noted your preferred slots and our team will confirm the best available time within <strong>24 hours</strong>. You'll receive a calendar invite once confirmed.</p>

      <div style="background:#f8f6ff;border-left:4px solid #7c3aed;border-radius:4px;padding:16px 20px;margin:20px 0">
        <p style="margin:0 0 10px;color:#7c3aed;font-weight:700;font-size:12px;text-transform:uppercase;letter-spacing:.06em">Your Preferred Slots</p>
        <ol style="margin:0;padding:0 0 0 4px;list-style:none">${slotsHTML}</ol>
      </div>

      <p style="color:#666;font-size:13px;line-height:1.6">In the meantime, feel free to reach out to <a href="mailto:sales@rikai.tech" style="color:#7c3aed">sales@rikai.tech</a> if you have any questions.</p>

      <hr style="border:none;border-top:1px solid #eee;margin:24px 0">
      <p style="margin:0;color:#999;font-size:12px;text-align:center">Rik AI · The new verse of market intelligence</p>
    </div>
  </div>
</body>
</html>`;
}

// ─── HubSpot helpers ──────────────────────────────────────────────────────────

async function hubspotRequest(path, method, body) {
  const res = await fetch(`https://api.hubapi.com${path}`, {
    method,
    headers: {
      Authorization: `Bearer ${process.env.HUBSPOT_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  return { ok: res.ok, status: res.status, data: res.ok ? await res.json() : null };
}

async function upsertHubSpotContact({ name, company, email, phone }) {
  const [firstname, ...rest] = name.trim().split(' ');
  const lastname = rest.join(' ');

  // Try create first
  const create = await hubspotRequest('/crm/v3/objects/contacts', 'POST', {
    properties: { firstname, lastname, email, phone: phone || '', company, hs_lead_status: 'NEW' },
  });

  if (create.ok) return create.data.id;

  // 409 = already exists — search by email to get existing ID
  if (create.status === 409) {
    const search = await hubspotRequest('/crm/v3/objects/contacts/search', 'POST', {
      filterGroups: [{ filters: [{ propertyName: 'email', operator: 'EQ', value: email }] }],
    });
    if (search.ok && search.data.results?.length) return search.data.results[0].id;
  }

  return null;
}

async function createHubSpotDeal({ name, company, slots, notes, guests, contactId }) {
  const slotsSummary = slots.map((s, i) => `#${i + 1}: ${formatSlotShort(s)}`).join(' | ');
  const parts = [`Preferred slots: ${slotsSummary}`];
  if (guests?.length) parts.push(`Guests: ${guests.join(', ')}`);
  if (notes) parts.push(`Notes: ${notes}`);

  const associations = contactId
    ? [{ to: { id: contactId }, types: [{ associationCategory: 'HUBSPOT_DEFINED', associationTypeId: 3 }] }]
    : [];

  const deal = await hubspotRequest('/crm/v3/objects/deals', 'POST', {
    properties: {
      dealname: `Demo Request — ${name} (${company})`,
      dealstage: 'appointmentscheduled',
      pipeline: 'default',
      description: parts.join('\n\n'),
    },
    associations,
  });

  return deal.ok ? deal.data : null;
}

async function createHubSpotNote({ slots, guests, notes, contactId, dealId }) {
  const slotsText = slots.map((s, i) => `#${i + 1}  ${formatSlotLong(s)}`).join('\n');
  const guestsText = guests?.length ? guests.map(g => `• ${g}`).join('\n') : 'None';
  const notesText = notes?.trim() || 'Not provided';

  const noteBody = `PREFERRED SLOTS\n${slotsText}\n\nGUESTS TO INCLUDE IN CALENDAR INVITE\n${guestsText}\n\nADDITIONAL NOTES FROM PROSPECT\n${notesText}`;

  const note = await hubspotRequest('/crm/v3/objects/notes', 'POST', {
    properties: {
      hs_note_body: noteBody,
      hs_timestamp: new Date().toISOString(),
    },
  });

  if (!note.ok) return;
  const noteId = note.data.id;

  await Promise.allSettled([
    contactId && hubspotRequest(`/crm/v3/objects/notes/${noteId}/associations/contacts/${contactId}/note_to_contact`, 'PUT'),
    dealId    && hubspotRequest(`/crm/v3/objects/notes/${noteId}/associations/deals/${dealId}/note_to_deal`, 'PUT'),
  ]);
}

// ─── Route handler ────────────────────────────────────────────────────────────

export async function POST(request) {
  try {
    const { name, company, email, phone, slots, guests, notes } = await request.json();

    const fromAddress = process.env.RESEND_FROM_ADDRESS || 'Rik AI <noreply@rikai.tech>';
    const toAddress = process.env.BOOKING_NOTIFY_EMAIL || 'sales@rikai.tech';

    const allRecipients = [email, ...(guests || [])].filter(Boolean);

    const [teamEmail, confirmEmail, hubspot] = await Promise.allSettled([
      // Internal team notification
      resend.emails.send({
        from: fromAddress,
        to: [toAddress],
        subject: `New Demo Request — ${name} (${company})`,
        html: teamEmailHTML({ name, company, email, phone, slots, guests: guests || [], notes }),
      }),

      // Confirmation to prospect + guests
      resend.emails.send({
        from: fromAddress,
        to: allRecipients,
        replyTo: toAddress,
        subject: `Your Rik AI demo request is confirmed — we'll be in touch shortly`,
        html: confirmationEmailHTML({ name, slots }),
      }),

      // HubSpot CRM
      (async () => {
        const contactId = await upsertHubSpotContact({ name, company, email, phone });
        const deal = await createHubSpotDeal({ name, company, slots, notes, guests, contactId });
        await createHubSpotNote({ slots, guests, notes, contactId, dealId: deal?.id || null });
      })(),
    ]);

    // Log failures server-side but don't expose them to the client
    if (teamEmail.status === 'rejected')   console.error('[book-demo] Team email failed:', teamEmail.reason);
    if (confirmEmail.status === 'rejected') console.error('[book-demo] Confirm email failed:', confirmEmail.reason);
    if (hubspot.status === 'rejected')      console.error('[book-demo] HubSpot failed:', hubspot.reason);

    return Response.json({ success: true });
  } catch (err) {
    console.error('[book-demo] Unexpected error:', err);
    return Response.json({ success: false }, { status: 500 });
  }
}
