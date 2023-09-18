document.getElementById('donateButton').addEventListener('click', function () {
    document.getElementById('paymentForm').style.display = 'block';
});

document.getElementById('payNow').addEventListener('click', function () {
    const amount = document.getElementById('amount').value;
    const paymentType = document.getElementById('paymentType').value;

    // You would replace this with actual payment gateway integration code.
    // For sandbox/testing, use a payment gateway's sandbox/test API.
    // Here's a mock response for success:
    const paymentResponse = {
        success: true,
        invoiceId: 'INV123456',
    };

    if (paymentResponse.success) {
        // Payment successful, generate an invoice and send an email.
        const invoiceAmount = amount;
        const invoiceId = paymentResponse.invoiceId;

        // Replace with code to generate an invoice and send an email.
        const emailContent = `Thank you for your donation! Invoice ID: ${invoiceId}, Amount: $${invoiceAmount}`;
        alert('Payment Successful!');
        console.log(emailContent);
    } else {
        alert('Payment Failed. Please try again.');
    }
});
