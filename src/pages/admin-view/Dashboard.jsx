import ImageUpload from "@/components/admin-view/ImageUpload";
import { Button } from "@/components/ui/button";
import { addFeatureImages, getFeatureImages } from "@/store/common/commonSlice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const AdminDashboard = () => {
  const [imageFile, setImageFile] = useState(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");
  const [imageLoading, setImageLoading] = useState(false);
  const { featureImageList } = useSelector((state) => state.commonFeature);
  const dispatch = useDispatch();

  //this is for handling the uploaded image
  const handleUploadFeatureImage = () => {
    dispatch(addFeatureImages(uploadedImageUrl)).then((data) => {
      console.log(data, "Data");
      if (data?.payload?.success) {
        dispatch(getFeatureImages());
        setImageFile(null);
        setUploadedImageUrl("");
      }
    });
  };
  //this is for calling featureImageList
  useEffect(() => {
    dispatch(getFeatureImages());
  }, [dispatch]);
  console.log(featureImageList, "FeatureaImageList");
  return (
    <div>
      <ImageUpload
        file={imageFile}
        setFile={setImageFile}
        uploadedImageUrl={uploadedImageUrl}
        setUploadedImageUrl={setUploadedImageUrl}
        setImageLoading={setImageLoading}
        imageLoading={imageLoading}
        isCustomStyling={true}
        // isEditMode={currentEditedId !== null}
      />
      <Button
        onClick={handleUploadFeatureImage}
        className="mt-5 w-full cursor-pointer"
      >
        Upload
      </Button>
      <div className="flex flex-col gap-4 mt-5">
        {featureImageList && featureImageList.length > 0
          ? featureImageList.map((featureImgItem) => (
              <div>
                <img
                  src={featureImgItem?.image}
                  className="w-full h-[300px] object-cover rounded-2xl"
                />
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default AdminDashboard;
