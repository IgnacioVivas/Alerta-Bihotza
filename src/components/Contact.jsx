import Banner from './Banner';
import '../assets/styles/contact.scss';

function Contact() {
  return (
    <div>
      <Banner />
      <div className='contact-container'>
        <input type='text' className='putin' placeholder='your e-mail address' />
        <input type='text' className='putin' placeholder='full name' />
        <textarea
          name=''
          id=''
          cols='30'
          rows='10'
          className='putin'
          placeholder='write message'
        ></textarea>
        <button className='btn-contact'>shop now</button>
      </div>
    </div>
  );
}

export default Contact;
