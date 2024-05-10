import torch
from torchvision import transforms
from transformers import AutoImageProcessor, AutoModelForImageClassification
from PIL import Image


processor = AutoImageProcessor.from_pretrained("Pranavkpba2000/convnext-fine-tuned-skin-cancer")
model = AutoModelForImageClassification.from_pretrained("Pranavkpba2000/convnext-fine-tuned-skin-cancer")

# Assuming the model is in evaluation mode
model.eval()

disease_dict = {
    0: 'Actinic Keratosis',
    1: 'Basal Cell Carcinoma',
    2: 'Benign keratosis-like lesions',
    3: 'Dermatofibroma',
    4: 'Melanoma',
    5: 'Melanocytic nevi',
    6: 'Squamous Cell Carcinoma',
    7: 'Vascular lesions'
    }

def preprocess_image(image_path):
    preprocess = transforms.Compose([
        transforms.Resize(256),  # Resize so the smallest side is 256 pixels
        transforms.CenterCrop(224),  # Crop the center 224x224 pixels
        transforms.ToTensor(),  # Convert the image to a tensor
        transforms.Normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225]),  # Normalize
    ])
    image = Image.open(image_path).convert('RGB')
    image = preprocess(image)
    image = image.unsqueeze(0)  # Add batch dimension
    return image

def get_prediction(image_path):
    image_tensor = preprocess_image(image_path)
    with torch.no_grad():
        outputs = model(image_tensor)
    # The outputs are logits, get the max index to find the predicted class
    predictions = torch.nn.functional.softmax(outputs.logits, dim=1)
    predicted_class = predictions.argmax(dim=1).item()
    print(disease_dict[predicted_class])
    return disease_dict[predicted_class]

def main():
    get_prediction('./test_images/df.jpg')
if __name__ == '__main__':
    main()