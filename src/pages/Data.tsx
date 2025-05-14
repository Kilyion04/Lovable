import { Layout } from "@/components/layout/Layout";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const DataManagement = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isAdmin = true; // Replace with actual admin check
    if (!isAdmin) {
      navigate("/"); // Redirect non-admin users
    }
  }, [navigate]);

  return (
    <Layout>
      <section className="py-20">
        <h1 className="text-3xl font-bold mb-6">Gestion de la Base de Données</h1>
        <p>Cette section est réservée à l'administrateur.</p>
        {/* Add database management tools */}
      </section>
    </Layout>
  );
};

export default DataManagement;