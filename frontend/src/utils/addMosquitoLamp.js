import api from '../services/api';

const addMosquitoLamp = async () => {
  try {
    // Fetch the image file
    const response = await fetch('/img1.jpg');
    const blob = await response.blob();
    const file = new File([blob], 'img1.jpg', { type: 'image/jpeg' });

    // Create form data
    const formData = new FormData();
    formData.append('title', 'Rechargeable UV Electric Mosquito Killer Lamp & Bug Zapper for Indoor & Outdoor Use');
    formData.append('shortDescription', 'Enjoy a peaceful, bug-free environment with our powerful and portable Mosquito Killer Lamp. Using advanced UV light technology, it attracts mosquitoes and other flying insects and eliminates them instantly with a high-voltage electric shock.');
    formData.append('longDescription', `Say Goodbye to Buzzing Pests!\n\nTired of mosquitoes and flying insects ruining your peace and quiet? Our Rechargeable Electric Mosquito Killer Lamp is the ultimate solution for protecting your family from pesky bites, without the use of harmful chemicals or sprays. Its modern, portable design makes it a perfect fit for any indoor or outdoor setting.\n\nHow It Works\n\nThis device uses a 3-step process for maximum effectiveness:\nAttract: An energy-efficient, 365nm UV violet light irresistibly lures mosquitoes, flies, and other light-sensitive insects.\nZap: Once the insects approach the light, they are instantly eliminated by the powerful, high-voltage electric grid.\nCollect: The dead insects are collected in a convenient, easy-to-clean tray at the bottom of the device.\n\nKey Features:\n
• Highly Effective: The powerful UV lamp provides 360° coverage to attract insects from all directions.\n• Safe for Everyone: The electric grid is enclosed in a durable, protective ABS plastic cage, keeping children and pets safe from accidental contact. It's a non-toxic and radiation-free solution.\n• USB Rechargeable & Portable: Equipped with a long-lasting rechargeable battery and a convenient USB-C charging port. The handy strap allows you to hang it anywhere or carry it with you on the go.\n• Whisper-Quiet Operation: No loud zapping noises! The device operates silently, making it perfect for use in bedrooms, nurseries, or offices without disturbing sleep or concentration.\n• Easy to Use & Clean: With a simple one-button operation, it's incredibly easy to use. The removable bottom tray allows for quick and hygienic disposal of dead insects. A small brush is included for easy maintenance.`);
    formData.append('price', '999.00');
    formData.append('compareAtPrice', '1999.00');
    formData.append('shopifyProductId', 'mosquito-lamp-uv');
    formData.append('featuredImage', file);

    // Send the request
    const { data } = await api.post('/products', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    console.log('Product added successfully:', data);
    return data;
  } catch (error) {
    console.error('Error adding product:', error);
    throw error;
  }
};

export default addMosquitoLamp;
