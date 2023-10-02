import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";

type AccountData = {
  amountNeeded: string;
};
type AccountFormProps = AccountData & {
  updateFields: (fields: Partial<AccountData>) => void;
};

export const AccountForm = ({
  amountNeeded,
  updateFields,
}: AccountFormProps) => {

  const model = yup.object({
    amountNeeded: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(model),
  });

  return (
    <>
        <label>amountNeeded</label>
        <input
          {...register("amountNeeded")}
          autoFocus
          required
          type="amountNeeded"
          value={amountNeeded}
          onChange={(e) => updateFields({ amountNeeded: e.target.value })}
        />
    </>
  );
};
