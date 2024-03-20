const customer = {
  name: "Brian Janes",
  birthDate: "1991-06-23",
  gender: "Male",
  roomPreferences: ["Non-smoking", "King-size bed"],
  paymentMethod: "Credit Card",
  mailingAddress: {
    street: "123 Main St",
    city: "St. John's",
    province: "NL",
    postalCode: "A1A 1A1",
  },
  phoneNumber: "(709)754-2255",
  checkIn: {
    date: "2024-02-01",
  },
  checkOut: {
    date: "2024-02-09",
  },
  getAge() {
    const today = new Date();
    const birthDate = new Date(this.birthDate);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    return age;
  },
  getDurationOfStay() {
    const checkInDate = new Date(this.checkInDate);
    const checkOutDate = new Date(this.checkOutDate);
    const durationInMilliseconds = checkOutDate - checkInDate;
    const durationInDays = Math.floor(
      durationInMilliseconds / (1000 * 60 * 60 * 24)
    );
    return durationInDays;
  },
};

document.addEventListener("DOMContentLoaded", function () {
  const customerDescription = `
<ul>
    <li>Name: ${customer.name}</li>
    <li>Age: ${customer.getAge()}</li>
    <li>Gender: ${customer.gender}</li>
    <li>Room Preferences: ${customer.roomPreferences.join(", ")}</li>
    <li>Payment Method: ${customer.paymentMethod}</li>
    <li>Street Address: ${customer.mailingAddress.street}, </li>
    <li>City: ${customer.mailingAddress.city} </li>
    <li>Province: ${customer.mailingAddress.province} </li>
    <li>Postal Code: ${customer.mailingAddress.postalCode}</li>
    <li>Phone Number: ${customer.phoneNumber}</li>
    <li>Check-in Date: ${customer.checkIn.date}</li>
    <li>Check-out Date: ${customer.checkOut.date}</li>
    <li>Duration of Stay: ${customer.getDurationOfStay()} days </li>
</ul>
`;

  console.log(customerDescription);

  document.body.innerHTML = customerDescription;
});
