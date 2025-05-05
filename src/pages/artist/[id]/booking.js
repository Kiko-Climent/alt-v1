import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/utils/firebaseConfig'; // Ajusta la ruta según tu estructura
import { useState } from 'react';
import BookingModal2 from '@/components/Booking/BookingModal2';

export default function BookingPage({ id, bookingEmbed }) {
  
  const [isOpen, setIsOpen] = useState(true)
  if (!bookingEmbed) {
    return <p>Could not find the booking form</p>;
  }

  return (
    <div>
      <BookingModal2 
        embedCode={bookingEmbed}
        isOpen={isOpen}
        artistId = {id}
        setIsOpen={setIsOpen}
      />
    </div>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.params;

  try {
    const artistRef = doc(db, 'roster', id);
    const docSnap = await getDoc(artistRef);

    if (!docSnap.exists()) {
      return {
        notFound: true,
      };
    }

    const data = docSnap.data();
    return {
      props: {
        id,
        bookingEmbed: data.booking_embed || null,
      },
    };
  } catch (error) {
    console.error('Error fetching artist:', error);
    return {
      props: {
        id,
        bookingEmbed: null,
      },
    };
  }
}
