const pdfRenderer = details => {
  return `
    <h1 style="text-align: center;">
      <strong>Invoicer</strong>
    </h1>
    
    <table style="margin: auto; margin-top: 5%; font-family: arial, sans-serif; border-collapse: collapse;width: 100%;">
      <tr>
        <th style="border: 1px solid; text-align: left; padding: 8px;">Entity</th>
        <th style="border: 1px solid; text-align: left; padding: 8px;">Details</th>
      </tr>

      <tr>
        <td style="border: 1px solid; text-align: left; padding: 8px;">Product Name</td>
        <td style="border: 1px solid; text-align: left; padding: 8px;">${details.product_name}</td>
      </tr>

      <tr>
        <td style="border: 1px solid; text-align: left; padding: 8px;">Price</td>
        <td style="border: 1px solid; text-align: left; padding: 8px;">${details.price}$</td>
      </tr>

      <tr>
        <td style="border: 1px solid; text-align: left; padding: 8px;">Quantity</td>
        <td style="border: 1px solid; text-align: left; padding: 8px;">${details.quantity}</td>
      </tr>

      <tr>
        <td style="border: 1px solid; text-align: left; padding: 8px;">Billing Address</td>
        <td style="border: 1px solid; text-align: left; padding: 8px;">${details.billing_address}</td>
      </tr>

      <tr>
        <td style="border: 1px solid; text-align: left; padding: 8px;">Shipping Address</td>
        <td style="border: 1px solid; text-align: left; padding: 8px;">${details.shipping_address}</td>
      </tr>

      <tr>
        <td style="border: 1px solid; text-align: left; padding: 8px;">Contractor Name</td>
        <td style="border: 1px solid; text-align: left; padding: 8px;">${details.contractor_name}</td>
      </tr>

      <tr>
        <td style="border: 1px solid; text-align: left; padding: 8px;">Feedback</td>
        <td style="border: 1px solid; text-align: left; padding: 8px;">${details.feedback}</td>
      </tr>
    </table>
  `
}

export default pdfRenderer