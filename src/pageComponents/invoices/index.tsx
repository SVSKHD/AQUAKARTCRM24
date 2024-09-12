import AquaCrmLayout from "@/components/layout/layout";

const AquaInvoicesComponent = () => {
  return (
    <>
      <AquaCrmLayout>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-3">
              <h1>Invoices</h1>
              {/* You can add your invoice-related content here */}
            </div>
            <div className="col-span-9">
              {/* Add any additional sidebar or content here */}
              <h2>Sidebar or Info Section</h2>
            </div>
          </div>
        </div>
      </AquaCrmLayout>
    </>
  );
};

export default AquaInvoicesComponent;
