import Card from "../UI/Card";

const SystemStatCard = ({title, description, stats}) => {
  return(
    <Card width="w-full" className="border border-border flex flex-col  p-6 gap-4">
      <h3 className="font-semibold text-sm text-text-primary">{title}</h3>
      <p className="text-4xl font-bold text-primary">{stats != null ? stats : "-"}</p>
      <p className="text-sm text-text-secondary mt-auto">{stats != null ? description : "Dados não disponíveis"}</p>
    </Card> 
  );
}

export default SystemStatCard;
