import Link from "next/link";
import { FormEvent, useState } from "react";
import { Step1 } from "../../components/Form/Step1";
import { Step2 } from "../../components/Form/Step2";
import { Step3 } from "../../components/Form/Step3";
import emailjs from "@emailjs/browser";
import { useForm } from "../../hook/useForm";
import { useRouter } from "next/router";
import { BsArrowLeftCircle } from 'react-icons/bs';
import { RiSendPlaneFill } from 'react-icons/ri';

type FormData = {
  name: string;
  lastName: string;
  escorts: string;
  amounts: string;
  message: string;
};

const INITIAL_DATA: FormData = {
  name: "",
  lastName: "",
  escorts: "",
  amounts: "",
  message: "",
};

export default function Presence() {
  const [data, setData] = useState(INITIAL_DATA);
  const router = useRouter()

  function updateFields(fields: Partial<FormData>) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }

  const { stpes, currentStep, step, isFirstStep, isLastStep, back, next } =
    useForm([
      <Step1 key={1} {...data} updateFields={updateFields} />,
      <Step2 key={2} {...data} updateFields={updateFields} />,
      <Step3 key={3} {...data} updateFields={updateFields} />,
    ]);

  function handlerSubmit(e: FormEvent) {
    e.preventDefault();
    if (!isLastStep) return next();
    alert("Enviado com sucesso");

    const templateId = "template_2thsg4j";
    const serviceId = "service_diklez2";
    const userId = "pvozju2tTQ4pmpk57";

    emailjs
      .send(
        serviceId,
        templateId,
        {
          name: { ...data }.name,
          lastName: { ...data }.lastName,
          escorts: { ...data }.escorts,
          amounts: { ...data }.amounts,
          message: { ...data }.message,
        },
        userId
      )
      .then((response) => {
        response.status, response.text;
        router.push('/')
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="flex px-6 h-screen justify-center items-center">
      <form className="p-6 w-full sm:w-2/4 shadow-2xl rounded-lg" onSubmit={handlerSubmit}>
        <div className="flex justify-between w-full mb-8 pb-4 border-b-[1px]">
          <Link href="/">{<BsArrowLeftCircle size={26} />}</Link>
          <span className="text-lg sm:text-2xl">Confirme a sua presença</span>
          <span>
            {currentStep + 1} / {stpes.length}
          </span>
        </div>

        <div className="h-2/4">{step}</div>

        <div className="flex w-full sm:px-32 items-center justify-center gap-6 mt-10">
          {!isFirstStep && (
            <button
              className="p-4 w-full bg-black bg-opacity-10 rounded-xl"
              type="button"
              onClick={back}
            >
              Voltar
            </button>
          )}
          <button
            className="flex flex-row items-center gap-4 justify-center p-4 w-full text-center bg-[#80E1F7] rounded-xl"
            type="submit"
          >
            {isLastStep ? "Enviar" : "Proximo"}
            {isLastStep? <RiSendPlaneFill size={18}/> : null}
          </button>
        </div>
      </form>
    </div>
  );
}
