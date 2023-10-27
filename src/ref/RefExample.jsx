import React, { useRef, useState } from "react";

export const RefExample = () => {
  const [feedback, setFeedback] = useState({
    email: "",
    feedback: "",
  });

  //   create a ref
  const emailRef = useRef();
  const feedbackRef = useRef();
  //   const handleInputChange = (e) => {
  //     console.log('running handleInputChange');
  //     const { value, name } = e.target;
  //     setFeedback({ ...feedback, [name]: value });
  //   };

  console.log("rendering component");

  const handleForm = (e) => {
    e.preventDefault();
    console.log("email: ", emailRef.current.value);
    console.log("feedback: ", feedbackRef.current.value);
  };

  return (
    <section>
      <h3>Feedback</h3>
      <form action="" onSubmit={handleForm}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            ref={emailRef}
            // onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="feedback">feedback:</label>
          <textarea
            name="feedback"
            id="feedback"
            cols="30"
            rows="10"
            ref={feedbackRef}
            // onChange={handleInputChange}
          ></textarea>
        </div>
        <div>
          <input type="submit" value="send" />
        </div>
      </form>
    </section>
  );
};

// if a component re renders all its child comp also rerenders

// const emailInput = document.getElementById('email');
