var client;

ticketDetails();

async function ticketDetails() {
  client = await app.initialized();
  const element = document.getElementById('app-text');
  let context = await client.instance.context();
  console.log(context);
  element.innerHTML = `${context.data.description_data}`;
}
