#!/bin/bash

# Path to the input folder containing images
input_folder="/assets/gallery"

# Path to the output folder where WebP images will be saved
output_folder="/src/assets/gallery"

# Convert each image to WebP format and compress
for image in "$input_folder"/*.{jpg,jpeg,png}; do
  filename=$(basename "$image")
  name_no_ext="${filename%.*}"
  output_path="$output_folder/$name_no_ext.webp"

  # Convert to WebP using imagemagick
  convert "$image" -quality 80 "$output_path"

  # Further compress the WebP image using cwebp
  cwebp -q 80 "$output_path" -o "$output_path"
done

echo "Conversion and compression complete."