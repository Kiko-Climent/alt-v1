import React, { useState, useEffect } from "react";
import { storage } from "./firebaseConfig";
import { ref as storageRef, getDownloadURL } from "firebase/storage";
import Image from "next/image";

function UrlFirebase({ url, className }) {
  const [source, setSource] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) return; // ⚠️ No ejecutar si url es null o vacío

    const fetchUrl = async () => {
      try {
        const imageRef = storageRef(storage, url);
        const downloadUrl = await getDownloadURL(imageRef);
        setSource(downloadUrl);
      } catch (err) {
        setError("Error loading image");
      }
    };

    fetchUrl();
  }, [url]);

  if (error) return <div>{error}</div>;

  return source ? (
    <Image
      src={source}
      alt={source}
      width={500}
      height={600} // Ajusta la altura a un valor que unifique el formato
      style={{ 
        objectFit: "cover", 
        aspectRatio: "4 / 5", // Relación personalizada
      }}
      priority
      loading="eager"
    />
  ) : (
    <div>Loading...</div>
  );
}

export default UrlFirebase;
