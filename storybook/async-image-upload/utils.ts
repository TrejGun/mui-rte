export const uploadImageToServer = (file: File): Promise<any> => {
  return new Promise(resolve => {
    console.info(`Uploading image ${file.name} ...`);
    setTimeout(() => {
      console.info("Upload successful");
      resolve(`https://return_uploaded_image_url/${file.name}`);
    }, 1000);
  });
};

export const uploadImage = async (file: File): Promise<any> => {
  const url = await uploadImageToServer(file);
  if (!url) {
    throw new Error();
  }
  return {
    data: {
      url: url,
      width: 300,
      height: 200,
      alignment: "left", // or "center", "right"
      type: "image", // or "video"
    },
  };
};
