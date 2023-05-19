import { useState } from "react";
import { FromStyled } from "./style";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { BsFillRocketTakeoffFill } from "react-icons/bs";

export const FormComponent = () => {
  const [inputValue, setInputValue] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputWidth = (e: any) => {
    const { name, value } = e.target;
    setInputValue((prevInputValue: any) => ({
      ...prevInputValue,
      [name]: value,
    }));
    const selectInput = e.target;
    selectInput.style.width = `${(value.length + 1) * 10}px`;
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const { name, email, subject, message } = inputValue;

    if (name === "" || email === "" || message === "") {
      toast.error("Preencha todos os campos", {
        style: { color: "red" },
      });
      return;
    }
    const templateParams = {
      name: name,
      message: message,
      email: email,
      subject: subject,
    };
    emailjs
      .send(
        "service_q2irt47",
        "template_u79nbar",
        templateParams,
        "yJj_UBaJigK8NMRSX"
      )
      .then(
        (response) => {
          toast.success(
            `Email enviado com sucesso! Obrigado ${e.target.name.value}`,
            {
              style: { color: "green" },
            }
          );
          setInputValue({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
          console.log(response);
        },
        (err) => {
          toast.error(`Nao foi possivel enviar o email, erro:${err}`, {
            style: { color: "red" },
          });
        }
      );
  };

  return (
    <FromStyled onSubmit={handleSubmit}>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <p className="yellow-text">
          <span className="code-line">00</span>
          <span className="purple-text">class</span> MeContate{" "}
          <span className="grey-text">&#123;</span>
        </p>
        <p className="function purple-text">
          <span className="code-line">01</span> constructor
          <span className="grey-text">() &#123;</span>
        </p>
        <label htmlFor="">
          <span className="code-line">02</span>
          <span className="red-text">this</span>.name =
          <input
            type="text"
            name="name"
            placeholder="“ ”"
            value={inputValue.name}
            onChange={handleInputWidth}
            autoComplete="new"
          />
          <span className="grey-text">; # digite seu nome</span>
        </label>
        <label htmlFor="">
          <span className="code-line">03</span>
          <span className="red-text">this</span>.email =
          <input
            type="email"
            name="email"
            placeholder="“ ”"
            value={inputValue.email}
            onChange={handleInputWidth}
            autoComplete="new-email"
          />
          <span className="grey-text">; # digite seu email</span>
        </label>
        <span className="function-bracket grey-text">
          {" "}
          <span className="code-line">04</span>&#125;
        </span>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <p className="function yellow-text">
          <span className="code-line">05</span> emailBody
          <span className="grey-text">() &#123;</span>
        </p>
        <span className="return purple-text">
          <span className="code-line">06</span>return
          <span className="grey-text">&#40;</span>
        </span>
        <label htmlFor="" className="">
          <span className="code-line">07</span>
          “assunto” :
          <input
            type="text"
            name="subject"
            placeholder="“ ”"
            value={inputValue.subject}
            onChange={handleInputWidth}
          />
          <span className="grey-text">; # digite o assunto</span>
        </label>
        <label htmlFor="">
          <span className="code-line">08</span>
          “mensagem” :
          <textarea
            name="message"
            placeholder="“ ”"
            value={inputValue.message}
            onChange={handleInputWidth}
          />
          <span className="grey-text">; # digite a mensagem</span>
        </label>
        <span className="return grey-text">
          <span className="code-line">09</span>&#41;;
        </span>
        <span className="function-bracket grey-text">
          <span className="code-line">10</span>&#125;
        </span>
        <span className="relative grey-text">
          <span className="code-line">11</span>&#125;
        </span>
      </motion.div>
      <motion.button
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.1 }}
        type="submit"
        className="send-button"
      >
        Enviar Email
        <BsFillRocketTakeoffFill />
      </motion.button>
    </FromStyled>
  );
};
