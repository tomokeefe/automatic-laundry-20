import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Blog = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Card className="max-w-2xl mx-4">
        <CardContent className="pt-6 text-center">
          <h1 className="text-3xl font-bold text-laundry-navy mb-4">
            Blog & Resources
          </h1>
          <p className="text-gray-600 mb-6">
            Expert insights for property owners and fun tips for residents.
          </p>
          <p className="text-gray-500 mb-8">
            This page is under construction. Please continue the conversation to
            help build out the complete Blog page with all 10 articles
            referenced on the homepage.
          </p>
          <Button className="bg-laundry-blue hover:bg-laundry-blue-dark">
            Coming Soon
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Blog;
