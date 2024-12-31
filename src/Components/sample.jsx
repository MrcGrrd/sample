import React from 'react';
import Swal from 'sweetalert2';
import emailjs from 'emailjs-com';

const LoveProposal = () => {
  const handleYesClick = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Are you sure about your decision because this is final once clicked.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        sendEmail();
        Swal.fire('Congratulations!', 'You have made the right decision.', 'success');
      }
    });
  };

  const sendEmail = () => {
    emailjs.send('service_tbsshda', 'template_t8z3c6o', {
      to_name: 'Your Love',
      message: 'Congratulations! The answer is YES. 🎉',
      reply_to: 'your_email@example.com'
    }, 'F4c0KmX4dPJEBR2if')
    .then(response => {
      console.log('Email sent successfully', response);
    })
    .catch(error => {
      console.error('Error sending email:', error);
    });
  };

  const handleNotNowClick = () => {
    Swal.fire({
      title: 'Oops...',
      text: 'You have no choice just click YES.',
      icon: 'info',
      showCancelButton: true,
      cancelButtonText: 'Cancel',
      showConfirmButton: false
    }).then((result) => {
      if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Good choice!', 'See? It wasn’t that hard.', 'success');
      }
    });
  };

  return (
    <div className="flex items-center justify-center h-screen bg-pink-200">
      <div className="text-center p-10 bg-white rounded-lg shadow-lg">
        <p className="text-4xl font-bold text-pink-500 mb-6">
          Will you be my girlfriend again? <span className="text-6xl">🥰❤️</span>
        </p>
        <div className="space-x-4">
          <button 
            onClick={handleYesClick} 
            className="px-6 py-3 bg-pink-500 text-white font-semibold rounded-lg shadow-md hover:bg-pink-600 focus:outline-none">
            Yes
          </button>
          <button 
            onClick={handleNotNowClick} 
            className="px-6 py-3 bg-gray-300 text-gray-700 font-semibold rounded-lg shadow-md hover:bg-gray-400 focus:outline-none">
            Not Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoveProposal;
