import { ModelStep } from "./ModelStep";

type UserData = {
    escorts: string;
    amounts: string;
}

type UserFormProps = UserData & {
    updateFields: (fields: Partial<UserData>) => void;
}

export function Step2({escorts, amounts, updateFields}: UserFormProps) {

  return (
    <ModelStep title="Diga para o Organizador quantas pessoa comparesseram:">
      <div className="w-full">
        <label className="flex flex-col font-medium text-md mb-3">Acompanhantes:</label>
        <input
          type="text"
          placeholder="Digite o nome dos acompanhantes"
          value={escorts}
          onChange={e => updateFields({escorts: e.target.value})}
          className="rounded-2xl w-full border-2 border-gray-300 py-3 px-5 shadow-sm"
        />
      </div>
      <div className="w-full">
        <label className="flex flex-col font-medium text-md mb-3">Quantos participantes:</label>
        <input
          type="number"
          placeholder="Digite quantos participantes são?"
          value={amounts}
          onChange={e => updateFields({amounts: e.target.value})}
          className="rounded-2xl w-full border-2 border-gray-300 py-3 px-5 shadow-sm"
        />
      </div>
    </ModelStep>
  );
}
