import React from 'react'

const VacccineT = ({vacccine}) => {
return (
<div>
  {
    vacccine === '"MAREK"'?' مارک ':
    vacccine === 'NEWCASTLE'?'  نیوکاسل ':
    vacccine === 'NEWCASTLE_B1_STRAIN'?'B1':
    vacccine === 'NEWCASTLE_LASOTA_STRAIN'?'لاسوتا':
    vacccine === 'NEWCASTLE_CLONE30_STRAIN'?'کلون30':
    vacccine === 'NEWCASTLE_CLONE_STRAIN'?'کلون':
    vacccine === 'NEWCASTLE_6_10_STRAIN'?'6/10':
    vacccine === 'NEWCASTLE_AVINEW_STRAIN'?'Avinew':
    vacccine === 'NEWCASTLE_VITAPEST_STRAIN'?'Vitapest':
    vacccine === 'GUMBORO'?'گامبرو (IBD)':
    vacccine === 'INFECTIOUS_BRONCHITIS'?'برونشیت (IBV)':
    vacccine === 'BRONCHITIS_H120_STRAIN'?'H120':
    vacccine === 'BRONCHITIS_H52_STRAIN'?'H52':
    vacccine === 'BRONCHITIS_MA5_STRAIN'?'Ma5':
    vacccine === 'BRONCHITIS_4_91_STRAIN'?'4/91':
    vacccine === 'BRONCHITIS_IB88_STRAIN'?'IB88':
    vacccine === 'BRONCHITIS_793B_STRAIN'?'793B':
    vacccine === 'BRONCHITIS_QX_STRAIN'?'QX':
    vacccine === 'AVIAN_INFLUENZA'?'آنفولانزا (AI)':
    vacccine === 'INFLUENZA_H9N2_STRAIN'?'H9N2':
    vacccine === 'INFLUENZA_H5_STRAIN'?'H5':
    vacccine === 'EGG_DROP_SYNDROME'?'(ED سندرم افت تولید تخم مرغS) ':
    vacccine === 'AVIAN_POX'?' آبله (POX) ':
    vacccine === 'INFECTIOUS_LARYNGOTRACHEITIS'?' لارینگوتراکئیت عفونی پرندگان (ILT) ':
    vacccine === 'INFECTIOUS_CORYZA'?'کوریزا (CORYZA) (هموفیلوس) ':
    vacccine === 'COCCIDIOSIS'?' کوکسیدیوز (COX) ':
    vacccine === 'CHICKEN_INFECTIOUS_ANEMIA'?'کم خونی عفونی جوجه ها (CIA) (CAV)':
    vacccine === 'PASTEURELLA'?' پاستورلوز (وبای طیور) ':
    vacccine === 'ORNITHOBACTERIUM_RHINOTRACHEALE'?'ارینتوباکتریوم رینوتراکئاله (ORT) ':
    vacccine === 'AVIAN_ENCEPHALOMYELITIS'?' آنسفالومیلیت پرندگان (AE)':
    vacccine === 'MYCOPLASMA_GALISEPTICUM'?' مایکوپلاسما گالیسپتیکوم (MG) ':
    vacccine === 'MYCOPLASMA_SYNOVIAE'?' مایکوپلاسما ساینوویه (MS) ':
    vacccine === 'SWOLLEN_HEAD_SYNDROME'?' سندرم سر متورم (SHS) (کله بادی) ':
    vacccine === 'REOVIRUS'?'رئو (REO)':''

  }
</div>
)}
export default VacccineT