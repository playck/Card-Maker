class ImageUpload {
  async upload(file) {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "biewo250");
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dqbdcb0pt/upload",
      {
        method: "POST",
        body: data,
      }
    );
    return await res.json();
  }
}

export default ImageUpload;
