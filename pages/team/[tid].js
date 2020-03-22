import { useRouter } from "next/router";
import Header from "./../../components/header";

const Team = () => {
  const router = useRouter();
  const { tid } = router.query;
  console.log(tid);

  return (
    <div>
      <Header /> Team: {tid}
    </div>
  );
};

export default Team;
