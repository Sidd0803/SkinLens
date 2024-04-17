from flask import Flask
from flask import Flask, request, render_template  
import torch  
from torchvision import models
import torchvision.transforms as transforms
from PIL import Image


app = Flask(__name__)
model = models.resnet18(pretrained=True)
model.eval()
 
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

# def home():
#     return 'Welcome to the PyTorch Flask app!'

@app.route('/')
def predict():
    # Get uploaded image file
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
    return f"index of highest probability:{class_index}"

    # # Get the predicted class and probability
    # predicted_class = class_names[class_index]
    # probability = probabilities[class_index]

    # # Sort class probabilities in descending order
    # class_probs = list(zip(class_names, probabilities))
    # class_probs.sort(key=lambda x: x[1], reverse=True)

    # # Render HTML page with prediction results
    # return render_template('predict.html', class_probs=class_probs,
    #                        predicted_class=predicted_class, probability=probability)
    
if __name__ == '__main__':
     app.run(debug=True)

predict()