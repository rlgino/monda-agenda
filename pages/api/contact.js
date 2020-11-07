// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const contacts = []

export default (req, res) => {
  if (req.method === 'POST') {
    // Process a POST request
    const body = JSON.parse(req.body)
    console.log(`Creating contact of ${body.name}`);
    const newContact = {
      name: body.name,
      email: body.email,
      phone: body.phone
    }
    contacts.push(newContact)
    console.log(`New Size ${contacts.length}`);
  } else {
    // Handle any other HTTP method
  }
  res.statusCode = 200
  res.json({ name: 'John Doe' })
}
