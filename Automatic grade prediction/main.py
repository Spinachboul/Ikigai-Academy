import streamlit as st
import pandas as pd
import joblib

mdl = joblib.load('model.joblib')

st.title("Predicting Student Performance")

gender = st.selectbox("Gender", ["male", "female"])
race = st.selectbox("Race/Ethnicity", ["group A", "group B", "group C", "group D", "group E"])
parental_education = st.selectbox("Parental Level of Education", ["some high school", "high school", "some college", "associate's degree", "bachelor's degree", "master's degree"])
lunch = st.selectbox("Lunch Type", ["standard", "free/reduced"])
test_prep = st.selectbox("Test Preparation Course Completion", ["none", "completed"])
scoreA = st.slider("Score A", 0, 100)
scoreB = st.slider("Score B", 0, 100)

if st.button("Predict"):
    q = pd.DataFrame([[gender, race, parental_education, lunch, test_prep, scoreA, scoreB]],
             columns=['gender', 'race/ethnicity', 'parental level of education', 'lunch', 'test preparation course', 'scoreA', 'scoreB'])
    prediction = mdl.predict(q)
    st.write(f"Predicted Final Score: {prediction[0]}")
