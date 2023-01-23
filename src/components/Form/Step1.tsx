import { ModelStep } from "./ModelStep";

type UserData = {
    name: string;
    lastName: string;
}

type UserFormProps = UserData & {
    updateFields: (fields: Partial<UserData>) => void;
}

export function Step1({name, lastName, updateFields}: UserFormProps) {

  return (
    <ModelStep title="Diga para o Organizador quem é você:">
      <div className="w-full">
        <label className="flex flex-col font-medium text-md mb-3">Nome:</label>
        <input
          type="text"
          placeholder="Digite seu nome"
          value={name}
          onChange={e => updateFields({name: e.target.value})}
          className="rounded-2xl w-full border-2 border-gray-300 py-3 px-5 shadow-sm"
        />
      </div>
      <div className="w-full">
        <label className="flex flex-col font-medium text-md mb-3">Sobrenome:</label>
        <input
          type="text"
          placeholder="Digite seu sobrenome"
          value={lastName}
          onChange={e => updateFields({lastName: e.target.value})}
          className="rounded-2xl w-full border-2 border-gray-300 py-3 px-5 shadow-sm"
        />
      </div>
    </ModelStep>
  );
}
