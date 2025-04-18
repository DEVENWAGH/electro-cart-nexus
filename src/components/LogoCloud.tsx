
const LogoCloud = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-xl text-center text-gray-600 mb-8">Trusted by Top Electronics Brands</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {/* Apple */}
          <div className="flex justify-center">
            <svg className="h-8 text-gray-500" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
            </svg>
          </div>
          
          {/* Samsung */}
          <div className="flex justify-center">
            <svg className="h-6 text-gray-500" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.84,20.84L3.16,20.84L3.16,3.16L20.84,3.16L20.84,20.84M22,2L2,2L2,22L22,22L22,2M17.46,9.41C17.46,7.76 16.18,6.75 13.9,6.75C11.83,6.75 10.83,7.76 10.63,8.77L12.27,9.29C12.38,8.7 12.96,8.07 13.9,8.07C14.93,8.07 15.67,8.5 15.67,9.26C15.67,10.07 14.96,10.39 14.39,10.55C13.39,10.83 12.3,11.13 12.3,13.02L12.3,13.34L14,13.34L14,13.13C14,12.11 16.29,12.12 16.29,9.67C16.29,9.5 16.25,9.42 16.25,9.42L17.46,9.42L17.46,9.41M14,17.5A1.5,1.5 0 0,0 12.5,16A1.5,1.5 0 0,0 11,17.5A1.5,1.5 0 0,0 12.5,19A1.5,1.5 0 0,0 14,17.5Z" />
            </svg>
          </div>
          
          {/* Sony */}
          <div className="flex justify-center">
            <svg className="h-4 text-gray-500" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2M11 8.5H15V14.25C15 14.25 14 15 12.5 15C10.53 15 9.5 13.19 9.5 11.82C9.5 10.47 10.16 8.97 12.06 8.97C13.97 8.97 14 10 14 10V11C14 11 13.5 10.5 12.55 10.5C11.61 10.5 11 11.25 11 12C11 12.75 11.45 13.5 12.5 13.5C13.5 13.5 14 13.25 14 13.25V10L11 10V8.5Z" />
            </svg>
          </div>
          
          {/* LG */}
          <div className="flex justify-center">
            <svg className="h-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="currentColor">
              <path d="M 10 4 C 6.7 4 4 6.7 4 10 L 4 38 C 4 41.3 6.7 44 10 44 L 38 44 C 41.3 44 44 41.3 44 38 L 44 10 C 44 6.7 41.3 4 38 4 L 10 4 z M 24.5 14 C 29.2 14 33 17.8 33 22.5 L 33 33 L 29 33 L 29 22.5 C 29 20 27 18 24.5 18 C 22 18 20 20 20 22.5 L 20 33 L 16 33 L 16 22.5 C 16 17.8 19.8 14 24.5 14 z M 36 18 L 36 22 L 38 22 L 38 33 L 34 33 L 34 22 L 36 18 z" />
            </svg>
          </div>
          
          {/* Microsoft */}
          <div className="flex justify-center">
            <svg className="h-6 text-gray-500" viewBox="0 0 24 24" fill="currentColor">
              <path d="M2,3H11V12H2V3M11,22H2V13H11V22M21,3V12H12V3H21M21,22H12V13H21V22Z" />
            </svg>
          </div>
          
          {/* Dell */}
          <div className="flex justify-center">
            <svg className="h-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="currentColor">
              <path d="M24 4C12.96 4 4 12.96 4 24s8.96 20 20 20 20-8.96 20-20S35.04 4 24 4zm0 7.2L38.96 24 24 36.8 9.04 24 24 11.2z" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoCloud;
