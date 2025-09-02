import axios from 'axios';

export const uploadInvoiceThumbnail = async(ImageData)=>{
    const formData = new FormData();

    
    formData.append('file', ImageData);
    formData.append('upload_preset', 'invoice-lokesh');
    formData.append('cloud_name', 'dy4qlkzux');


    const response = await axios.post('https://api.cloudinary.com/v1_1/dy4qlkzux/image/upload', formData);

      return response.data.secure_url;
}