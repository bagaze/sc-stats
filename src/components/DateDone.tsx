import { DateTime } from "ts-luxon";

export default function DateDone({data}: Props) {
  if (!data || data.length === 0) {
    return <></>;
  } else {
    return (
      <>
        { DateTime.fromISO(data).toFormat('dd/MM/yyyy') }
      </>
    );
  }
}

interface Props {
  data: string
}
