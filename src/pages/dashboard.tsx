import type { NextPage, GetServerSideProps } from "next"
import { getSession } from "next-auth/react"

import { Header } from "../components/header"
import { Footer } from "../components/footer"
import { Products } from "../components/products"

import { DashboardContainer } from "../globals"

const Dashboard: NextPage = () => {
  return (
	  <DashboardContainer>
		  <Header />
			<Products />
			<Footer />
		</DashboardContainer>
	)
}

export const getServerSideProps:GetServerSideProps = async ({ req }) => {
   const session = await getSession({ req })
	 if (!session) {
	   return {
		   redirect: {
			   destination: "/",
				 permanent: false
			 }
		 }
	 }

	 return { props:{} }
}

export default Dashboard;
