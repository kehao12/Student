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
    
    public partial class PROGRAM
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public PROGRAM()
        {
            this.STUDENTs = new HashSet<STUDENT>();
        }
    
        public int PRO_ID { get; set; }
        public int BRANCH_ID { get; set; }
        public string PRO_CODE { get; set; }
        public string PRO_NAME { get; set; }
        public Nullable<int> CREDITS_RE { get; set; }
        public Nullable<int> CREDITS_ELEC { get; set; }
        public Nullable<int> STATUS { get; set; }
    
        public virtual BRANCH BRANCH { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<STUDENT> STUDENTs { get; set; }
    }
}