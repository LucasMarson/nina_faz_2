import { ModelStep } from "./ModelStep";

type ConfirmData = {
  message: string;
};

type ConfirmFormProps = ConfirmData & {
  updateFields: (fields: Partial<ConfirmData>) => void;
};

export function Step3({ message, updateFields }: ConfirmFormProps) {
  return (
    <ModelStep title="Recado:">
      <div className="w-full">
        <label className="flex flex-col font-medium text-md mb-3">Deixe um recadinho:</label>
        <textarea
          placeholder="Deixe um recadinho, prometo que o papai e a mamae vão ler."
          value={message}
          onChange={e => updateFields({message: e.target.value})}
          className="rounded-xl w-full border-2 border-gray-300 py-3 px-5 shadow-sm"
          cols={30}
          rows={5}
        />
      </div>
    </ModelStep>
  );
}
