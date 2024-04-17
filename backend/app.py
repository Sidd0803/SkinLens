from flask import Flask, request, render_template, jsonify 
import torch  
from torchvision import models
import torchvision.transforms as transforms
from PIL import Image
import firebase_admin
from firebase_admin import db
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
model = models.resnet18(pretrained=True)
model.eval()

#firebase code
firebase_admin.initialize_app(options={
    'databaseURL': "https://skinlens-2f56d-default-rtdb.firebaseio.com",
})
 
def process_image(image):
    # Preprocess image for model
    transformation = transforms.Compose([
        transforms.Resize(256),
        transforms.CenterCrop(224),
        transforms.ToTensor(),
        transforms.Normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225])
    ])
    image_tensor = transformation(image).unsqueeze(0)
    
    return image_tensor

@app.route('/get_data', methods=['GET'])
def get_data():
    #user_id = request.args.get()
    ref = db.reference(f'/user')
    user_data = ref.get()
    return jsonify(user_data)

@app.route('/')
def predict():
    # Get uploaded image file [GET, POST]
    image = Image.open('./mole.jpg').convert('RGB')
    # Process image and make prediction
    image_tensor = process_image(image)
    output = model(image_tensor)

    # Get class probabilities
    probabilities = torch.nn.functional.softmax(output[0], dim=0)
    print(probabilities)
    top_probs, top_catids = torch.topk(probabilities, 5)
    
    # Get the index of the highest probability
    class_index = probabilities.argmax()
    return f"highest probability:{class_index}"
    
if __name__ == '__main__':
    app.run(debug=True)

predict()