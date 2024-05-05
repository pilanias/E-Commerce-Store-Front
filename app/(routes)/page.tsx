import getBillboard from "@/action/get-billboard";
import Container from "@/components/ui/container"
import Billboard from "@/components/billboard";

export const revalidate = 0;

const HomePage = async () => {
  const billboard = await getBillboard('3a3521ea-6a6a-48a6-b959-3ca99b233a66')

  return( 
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard}/>
      </div>
    </Container>
  );
}
 
export default HomePage;