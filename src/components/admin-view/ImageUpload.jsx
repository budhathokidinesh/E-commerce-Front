import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import React, { useEffect, useRef } from "react";
import { RiUploadCloudFill } from "react-icons/ri";
import { FaFileImage } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { RxCross2 } from "react-icons/rx";
import axios from "axios";
import { Skeleton } from "../ui/skeleton";

const ImageUpload = ({
  file,
  setFile,
  uploadedImageUrl,
  setUploadedImageUrl,
  imageLoading,
  setImageLoading,
}) => {
  const inputRef = useRef(null);
  //this is for handling the image file
  const handleImageFileCHange = (e) => {
    console.log(e.target.files);
    const selectedFile = e.target.files?.[0];
    if (selectedFile) setFile(selectedFile);
  };
  //this if for the handling the image drag
  const handleDragOver = (e) => {
    e.preventDefault();
  };
  //this if for the handling the image drop
  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files?.[0];
    if (droppedFile) setFile(droppedFile);
  };
  //this is for handling on deete the image
  const handleOnDelete = () => {
    setFile(null);
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };
  const uploadImageToCloudinary = async () => {
    setImageLoading(true);
    const data = new FormData();
    data.append("my_file", file);
    const response = await axios.post(
      "http://localhost:8000/api/admin/products/upload-image",
      data
    );
    console.log(response.data);
    if (response?.data?.success) setUploadedImageUrl(response.data.result.url);
    setImageLoading(false);
  };

  useEffect(() => {
    if (file !== null) uploadImageToCloudinary();
  }, [file]);

  return (
    <div className="w-full max-w-md mx-auto mt-4">
      <Label className="text-lg font-semibold mb-2 block">Upload Image</Label>
      <div
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        className="border-2 border-dashed rounded-lg p-2"
      >
        <Input
          id="image-upload"
          type="file"
          className="hidden"
          ref={inputRef}
          onChange={handleImageFileCHange}
        />
        {!file ? (
          <Label
            htmlFor="image-upload"
            className="flex flex-col items-center h-32 cursor-pointer"
          >
            <RiUploadCloudFill className="w-10 h-10 text-muted-foreground mb-2 mt-4" />
            <span>Grag & drop or click to upload image</span>
          </Label>
        ) : imageLoading ? (
          <Skeleton className="h-10 bg-gray-100" />
        ) : (
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <FaFileImage className="w-8 text-primary h-8 mr-2" />
            </div>
            <p className="text-sm font-medium">{file.name}</p>
            <Button
              variant="ghost"
              size="icon"
              className="cursor-pointer text-muted-foreground hover:text-foreground"
              onClick={handleOnDelete}
            >
              <RxCross2 className="w-5 h-5" />
              <span className="sr-only">Remove file</span>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageUpload;
