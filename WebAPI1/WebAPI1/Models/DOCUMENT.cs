//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace WebAPI1.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class DOCUMENT
    {
        public int ID { get; set; }
        public string STU_ID { get; set; }
        public Nullable<int> CATE_ID { get; set; }
        public Nullable<short> CHECKBOX { get; set; }
        public string NOTE { get; set; }
        public string TEXT { get; set; }
    
        public virtual CATEGORY CATEGORY { get; set; }
        public virtual STUDENT STUDENT { get; set; }
    }
}
