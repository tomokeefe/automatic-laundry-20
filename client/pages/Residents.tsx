import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Residents = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Card className="max-w-2xl mx-4">
        <CardContent className="pt-6 text-center">
          <h1 className="text-3xl font-bold text-laundry-navy mb-4">
            For Residents
          </h1>
          <p className="text-gray-600 mb-6">
            Laundry That Gets You – And Gets It Done.
          </p>
          <p className="text-gray-500 mb-8">
            This page is under construction. Please continue the conversation to help build out the complete Residents page with app features, download links, and fun hacks section.
          </p>
          <Button className="bg-laundry-orange hover:bg-laundry-orange text-white">
            Coming Soon
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Residents;
