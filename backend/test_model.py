import tensorflow as tf
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing import image
import numpy as np

def classify(path):
    # Load the model from .h5 file
    print("hi")
    model = load_model('modelv1.h5')
    #model.eval()

    disease_dict = {
    0: 'Actinic Keratosis',
    1: 'Basal Cell Carcinoma'
    2: 'Benign keratosis-like lesions',
    3: 'Dermatofibroma'
    4: 'Melanoma',
    5: 'Melanocytic nevi',
    6: 'Squamous Cell Carcinoma'
    7: 'Vascular lesions'
    }
    # Load and preprocess the image
    img = image.load_img(path, target_size=(28, 28))  # adjust target_size as per the model's requirement
    img_array = image.img_to_array(img)
    
    #img_array = np.squeeze(img_array, axis=0)  # model expects a batch of images
    slice_x = x[0, 0, :]

    # Predict with the model
    output = model.predict(img_array)
    idx = np.where(output == 1)[0]
    print(idx)

    # Print the output
    print("Model output:", disease_dict[idx[0]])
    return  disease_dict[idx[0]]

def main():
    classify('./bcc_sample.jpg')
if __name__ == '__main__':
    main()