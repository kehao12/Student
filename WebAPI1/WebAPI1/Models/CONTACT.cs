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
    
    public partial class CONTACT
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public CONTACT()
        {
            this.STUDENTs = new HashSet<STUDENT>();
        }
    
        public int CONTACT_ID { get; set; }
        public string STU_ID { get; set; }
        public string CELL_PHONE { get; set; }
        public string HOME_PHONE { get; set; }
        public string PHONE_MESS { get; set; }
        public string FATHER_NAME { get; set; }
        public string FATHER_PHONE { get; set; }
        public string FATHER_MAIL { get; set; }
        public string FATHER_WORKING { get; set; }
        public string FATHER_POSISION { get; set; }
        public string MOTHER_NAME { get; set; }
        public string MOTHER_PHONE { get; set; }
        public string MOTHER_WORKING { get; set; }
        public string MOTHER_POSISION { get; set; }
        public string MOTHER_MAIL { get; set; }
        public string SPON_NAME { get; set; }
        public string SPON_PHONE { get; set; }
        public string SPON_MAIL { get; set; }
        public string SPON_WORKING { get; set; }
        public string SPON_POSISION { get; set; }
    
        public virtual STUDENT STUDENT { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<STUDENT> STUDENTs { get; set; }
    }
}