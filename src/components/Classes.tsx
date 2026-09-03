import React from 'react';
import ClassSelector from './ClassSelector';

const Classes: React.FC = () => {
  return (
    <section id="classes" className="bg-bone">
      <div className="mb-10 md:mb-14 max-w-xl">
        <p className="label-xs mb-4">Find Your Practice</p>
        <h2>Four ways to move.</h2>
      </div>
      <ClassSelector />
    </section>
  );
};

export default Classes;
