var client;

init();

async function init() {
  client = await app.initialized();
  console.log(client, 'clientData');
  client.events.on('app.activated', getTicketDetails);
}

async function getTicketDetails() {
  const ticketDetails = document.getElementById('app-text');
  const data = await client.data.get('ticket');
  try {
    var {
      ticket: { description },
    } = data;
    ticketDetails.innerHTML = `${description}`;
  } catch (error) {
    console.log(error);
  }
  try {
    data = await client.interface.trigger('showModal', {
      title: 'Ticket Details',
      template: 'model.html',
      data: { description_data: description },
    });
  } catch (error) {
    console.log(error);
  }
}

// async function renderText() {
//   const textElement = document.getElementById('apptext');
//   const contactData = await client.data.get('contact');
//   const {
//     contact: { name },
//   } = contactData;

//   textElement.innerHTML = `Ticket is created by ${name}`;
//   getTicketDetails();
// }
