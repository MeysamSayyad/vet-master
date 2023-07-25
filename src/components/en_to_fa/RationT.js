import React from 'react'

const RationT = ({ration}) => {
return (
<div>
  {
    ration === 'FISH_MEAL'?'پودر ماهی ':
    ration === 'MEAT_MEAL'?' پودر گوشت ':
    ration === 'BLOOD_MEAL'?' پودر خون ':
    ration === 'FEATHER_MEAL'?'پودر پر ':
    ration === 'BONE_MEAL'?'پودر استخوان ':
    ration === 'OYSTER_SHELL_FLOUR'?' پودر صدف ':
    ration === 'LIMESTONE_POWDER'?'آهک پودر  ':
    ration === 'SOYBEAN_MEAL'?' کنجاله سویا ':
    ration === 'CANOLA_MEAL'?'کنجاله کانولا ':
    ration === 'CORN_MEAL'?' کنجاله ذرت ':
    ration === 'COTTON_SEED_MEAL'?' کنجاله تخم پنبه ':
    ration === 'SUNFLOWER_MEAL'?' کنجاله آفتاب گردان ':
    ration === 'PEANUT_MEAL'?' کنجاله بادام زمینی ':
    ration === 'SESAME_MEAL'?' کنجاله کنجد ':
    ration === 'CORN'?'ذرت':
    ration === 'WHEAT_BRAN'?'سبوس گندم ':
    ration === 'WHEAT'?'گندم':
    ration === 'BARLEY'?'جو':
    ration === 'RICE_BRAN'?'سبوس برنج ':
    ration === 'OATS'?'یولاف':
    ration === 'MILO'?'مایلو':
    ration === 'RYE'?'چاودار':
    ration === 'TRITICALE'?'تریتیکاله':
    ration === 'RICE'?'برنج':
    ration === 'RICE'?'ملاس':
    ration === 'FLAX'?'کتان':
    ration === 'SORGHUM'?'سورگوم':
    ration === 'OIL'?'روغن':
    ration === 'COTTONSEED_OIL'?' روغن پنبه دانه ':
    ration === 'CANOLA_OIL'?' روغن کانولا ':
    ration === 'SUNFLOWER_OIL'?' روغن آفتاب گردان ':
    ration === 'LINSEED_OIL'?' روغن بزرک ':
    ration === 'PALM_OIL'?' روغن پالم ':
    ration === 'SOYBEAN_OIL'?' روغن سویا ':
    ration === 'FISH_OIL'?' روغن ماهی ':
    ration === 'CHICKEN_FAT'?'چربی طیور ':
    ration === 'VEGETABLE_OIL'?' روغن گیاهی ':
    ration === 'SALT'?'نمک':
    ration === 'ENZYME'?'آنزیم':
    // ration === 'ENZYME'?'c':
    ration === 'PEA'?'نخود':
    // ration === 'PEA'?'c':
    ration === 'CALCIUM_CARBONATE'?'کلسیم کربنات ':
    ration === 'DICALCIUM_PHOSPHATE'?' دی کلسیم فسفات ':

    ration === 'MONOCALCIUM_PHOSPHATE'?' مونو کلسیم فسفات ':
    ration === 'SULFATE_CALCIUM'?'سولفات کلسیم ':
    ration === 'MAGNESIUM_OXIDE'?' اکسید منیزیم ':
    ration === 'PHOSPHATE'?'فسفات':
    ration === 'CHLORIDE_POTASSIUM'?' کلرید پتاسیم ':
    ration === 'POTASSIUM_AND_MAGNESIUM_SULFATE'?' سولفات پتاسیم و منیزیم   ':
    ration === 'POTASSIUM_SULFATE'?' سولفات پتاسیم ':
    ration === 'SODIUM_CARBONATE'?' کربنات سدیم ':
    ration === 'SODIUM_DIPHOSPHATE'?'دی فسفات سدیم ':
    ration === 'SODIUM_MONOPHOSPHATE'?'مونو فسفات سدیم ':
    ration === 'SODIUM_SULFATE'?' سولفات سدیم ':
    ration === 'PHOSPHORIC_ACID'?'اسیدفسفریک':
    ration === 'SELENIUM'?'سلنیوم':
    ration === 'METHIONINE'?'متیونین':
    ration === 'LYSINE'?'لیزین':
    ration === 'ARGININE'?'آرژنین':
    ration === 'TRYPTOPHAN'?'تریپتوفان':
    ration === 'THREONINE'?'ترئونین':
    ration === 'GLYCINE'?'گلیسین':
    ration === 'GLUTAMIC_ACID'?'اسیدگلوتامیک':
    ration === 'ISOLEUCINE'?'ایزولوسین':
    ration === 'VALINE'?'والین':
    ration === 'VITAMIN_D'?' ویتامین D ':
    ration === 'VITAMIN_A'?' ویتامین A':
    ration === 'VITAMIN_K'?' ویتامین K':
    ration === 'VITAMIN_E'?' ویتامین E':
    ration === 'VITAMIN_C'?'  ویتامین C ':
    ration === 'VITAMIN_B1'?' ویتامین B1':
    ration === 'VITAMIN_B2'?'  ویتامین B2 ':
    ration === 'VITAMIN_B6'?' ویتامین B6':
    ration === 'VITAMIN_B12'?' ویتامین B12':
    ration === 'B_COMPLEX'?'B کمپلکس ':
    ration === 'MINERAL_SUPPORT'?' مکمل مواد معدنی ':
    ration === 'VITAMIN_SUPPORT'?' مکمل ویتامین ':
    ration === 'OYSTER_MOUNT'?' صدف کوهی ':
    ration === 'OYSTER_SEA'?' صدف دریایی ':''
  }
</div>
)}
export default RationT