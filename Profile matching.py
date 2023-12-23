# Import necessary libraries
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, classification_report
from sklearn.preprocessing import LabelEncoder

# Load your dataset
# This dataset should contain features about profiles and a label indicating whether they are a match or not.
# Modify this according to your actual dataset.
df = pd.read_csv('your_dataset.csv')

# Perform data preprocessing
# This includes handling missing values, encoding categorical variables, etc.
# Modify this according to your actual dataset.
df = df.dropna()  # Drop rows with missing values for simplicity
le = LabelEncoder()
df['gender'] = le.fit_transform(df['gender'])  # Example encoding for a categorical variable

# Define features and target variable
X = df.drop('is_match', axis=1)  # Features
y = df['is_match']  # Target variable

# Split the data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Create a RandomForestClassifier (you can choose a different model based on your needs)
model = RandomForestClassifier()

# Train the model
model.fit(X_train, y_train)

# Make predictions on the test set
y_pred = model.predict(X_test)

# Evaluate the model
accuracy = accuracy_score(y_test, y_pred)
classification_report_result = classification_report(y_test, y_pred)

print(f'Accuracy: {accuracy}')
print('Classification Report:\n', classification_report_result)


