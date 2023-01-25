import { ModelStep } from "./ModelStep";

type UserData = {
    names: string;
}

type UserFormProps = UserData & {
    updateFields: (fields: Partial<UserData>) => void;
}

export function Step1({names, updateFields}: UserFormProps) {

  return (
    <ModelStep title="Diga para o Organizador o nome dos convidados:">
      <div className="w-full">
        <label className="flex flex-col font-bold text-md mb-3">Nomes:</label>
        <input
          type="text"
          required
          placeholder="Digite o nome dos convidados"
          value={names}
          onChange={e => updateFields({names: e.target.value})}
          className="rounded-2xl w-full border-2 border-gray-300 py-3 px-5 shadow-sm"
        />
      </div>
      {/* <div className="w-full">
        <label className="flex flex-col font-bold text-md mb-3">Sobrenome:</label>
        <input
          type="text"
          placeholder="Digite seu sobrenome"
          value={lastName}
          onChange={e => updateFields({lastName: e.target.value})}
          className="rounded-2xl w-full border-2 border-gray-300 py-3 px-5 shadow-sm"
        />
      </div> */}
    </ModelStep>
  );
}
