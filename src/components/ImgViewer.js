import { ImageList, ImageListItem } from "@mui/material";
import React, { useState, useEffect } from "react";
import sanityClient from "../client";
import styled from "styled-components";
import { SRLWrapper } from "simple-react-lightbox";

function ImgViewer() {
  const [photoData, setPhoto] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "photo"]{
                title,
                slug,
                mainImage{
                    asset->{
                        _id,
                        url
                    },
                    alt
                }
            }`
      )
      .then((data) => setPhoto(data))
      .catch(console.error);
  }, []);

  const options = {
    buttons: {
      backgroundColor: "rgba(30,30,36,0.8)",
      iconColor: "rgba(255, 255, 255, 0.8)",
      iconPadding: "10px",
      showAutoplayButton: true,
      showCloseButton: true,
      showDownloadButton: false,
      showFullscreenButton: true,
      showNextButton: true,
      showPrevButton: true,
      showThumbnailsButton: true,
      size: "40px",
    },
  };
  return (
    <>
      <PhotoboxText>
        <p>All media &copy;MaryMac.</p>
        <h3>Click photos to enlarge</h3>
      </PhotoboxText>

      <SRLWrapper options={options}>
        <ImageBox>
          <ImageList variant="quilted" cols={4} gap={10} rowHeight={200}>
            {photoData &&
              photoData.map((photo, index) => (
                <ImageListItem
                  key={photo.mainImage}
                  cols={
                    pattern[
                      index -
                        Math.floor(index / pattern.length) * pattern.length
                    ].cols
                  }
                  rows={
                    pattern[
                      index -
                        Math.floor(index / pattern.length) * pattern.length
                    ].rows
                  }
                >
                  <img
                    src={photo.mainImage.asset.url}
                    alt={photo.title}
                    className=""
                    loading="lazy"
                  />
                </ImageListItem>
              ))}
          </ImageList>
        </ImageBox>
      </SRLWrapper>
    </>
  );
}

const pattern = [
  {
    rows: 2,
    cols: 2,
  },
  {
    rows: 1,
    cols: 1,
  },
  {
    rows: 1,
    cols: 1,
  },
  {
    rows: 1,
    cols: 2,
  },
  {
    rows: 1,
    cols: 2,
  },
  {
    rows: 2,
    cols: 2,
  },
  {
    rows: 1,
    cols: 1,
  },
  {
    rows: 1,
    cols: 1,
  },
];

export default ImgViewer;

const ImageBox = styled.div`
  margin: 1rem;
  background-color: var(--background-light-color);

  &:hover {
    cursor: pointer;
  }

  @media (min-width: 768px) {
    margin: 1rem;
  }
`;

const PhotoboxText = styled.div`
  p {
    font-size: 0.75rem;
    font-weight: 100;
    margin-left: 20px;
    padding: 0;
  }

  h3 {
    font-size: 1rem;
    font-weight: 400;
    margin-left: 20px;
    padding: 0;
  }
`;
