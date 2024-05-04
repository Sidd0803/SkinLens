import tensorflow as tf
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing import image
import numpy as np

# Load the model from .h5 file
model = load_model('model.h5')
#model.eval()

disease_dict = {
0:'Melanocytic nevi',
1:'Melanoma',
2: 'Benign keratosis-like lesions',
3: 'Basal cell carcinoma',
4:'Actinic keratoses',
5:'Vascular lesions',
6:'Dermatofibroma'
}

# Load and preprocess the image
img = image.load_img('nv_sample.jpg', target_size=(75,100))  # adjust target_size as per the model's requirement
img_array = image.img_to_array(img)
img_array = np.expand_dims(img_array, axis=0)  # model expects a batch of images

# Predict with the model
output = model.predict(img_array)
idx = np.where(output == 1)[0]
print(idx)

# Print the output
print("Model output:", disease_dict[idx[0]])