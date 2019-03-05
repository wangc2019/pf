import {Component} from "react";
import React from "react"
import back from "../../img/back.png";
import "../../css/about.css"
import logo from "../../img/user/bibilogo.png"
import jump from "../../img/user/right.png"
import { hashHistory ,browserHistory} from "react-router";

class Agreement extends Component {
  goBack(){
    hashHistory.goBack()
  }
  render(){
    return(
      <div className="about">
        <div className="header"><img src={back} onClick={this.goBack.bind(this)} alt=""/>用户协议</div>
        <div className="content">
          <p>
            <strong>PowerFans服务协议&nbsp;</strong>
          </p>
          <p>
            最近更新于：2018年5月22日
          </p>
          <p>
            <strong>尊敬的用户：</strong>
          </p>
          <p>
            感谢您选择PowerFans服务。《PowerFans服务协议》（以下简称“本协议”）由PowerFans <strong>PTE. LTD.</strong>（以下简称“本公司”，公司注册号：<strong>201800958N</strong>，本公司是一家在新加坡注册的公司，注册地址为<strong>9 Temasek Boulevard #04-02 Suntec Tower Two Singapore 038989</strong>）和您（以下简称“用户”）签订，本协议在您与本公司之间具有合同上的法律效力。在本协议中：（1）“我们”和“我们”指代本公司，“我们的”应据此解释；及（2）“您”指代用户，“您的”应据此解释。您和本公司单独称为“一方”，合称为“双方”。
            &nbsp;
          </p>
          <p>
            本公司在此特别提醒您在使用我们的PowerFans移动应用（以下简称“PowerFans” 或“本软件”，PowerFans可在各移动应用平台上下载，包括但不限于<strong>Google Play</strong>和<strong>Apple App Store</strong>）之前，请认真阅读本协议及后文提及的相关协议，尤其是本协议中“免责及责任限制”等以加粗形式体现的条款，确保您充分理解本协议中各条款，并自主考虑风险。
          </p>
          <p>
            <strong>一、 关于本协议的确认与接纳</strong>
          </p>
          <p>
            1.您理解本协议及有关协议适用于PowerFans及PowerFans上本公司所自主开发和拥有的去中心化应用（简称“DApp”）（排除第三方开发的DApp）。
          </p>
          <p>
            2.您下载PowerFans软件并创建身份、恢复身份（定义见下文）或导入钱包，即视为您已经充分阅读并接受本协议全部条款，本协议立即生效，对双方具有约束力。 如果您不同意本协议条款，您应立即停止使用PowerFans。如果您已经下载了PowerFans，请立即删除。
          </p>
          <p>
            3.在访问或使用PowerFans时, 您同意：
          </p>
          <p>
            （1）接受本协议最新版本的约束（不变更亦不修改）；
          </p>
          <p>
            （2）在您所适用的司法管辖区域内，您已达到使用PowerFans的法定年龄，并可承担因使用PowerFans而产生的有约束力法律或金钱义务；
          </p>
          <p>
            （3）您不属于被排除人士（如本协议所定义）。
          </p>
          <p>
            4.本协议可由本公司随时更新，经修改的协议一经在PowerFans上公布，立即自动生效，不再另行通知。在本公司公布修改协议条款后，如果您不接受修改后的条款，请立即停止使用PowerFans，您继续使用PowerFans将被视为接受修改后的协议。
          </p>
          <p>
            <strong>二、 定义</strong>
          </p>
          <p>
            1.PowerFans：指由本公司基于区块链开发的数字钱包，包括其他为方便用户使用区块链系统而开发的辅助工具。

            &nbsp; &nbsp;
          </p>
          <p>
            2.被排除人士：
          </p>
          <p>
            （1）除了自然人以外的、具备订立本协议的法律和意识能力的人士；或
            &nbsp;
          </p>
          <p>
            （2）因本协议、法律、监管要求或适用于该用户的司法管辖区的规定而被以任何形式或方式（全部或部分）禁止、限制、无授权或无资格使用服务（如本协议所定义）的用户。
          </p>
          <p>
            3.身份： 指基于您的公私钥对生成的数字识别身份。
          </p>
          <p>
            4.新手指南： 指在您使用PowerFans之前（及在将来的使用过程中），本公司为您提供的PowerFans操作指南，以帮助您了解区块链的基础知识。
          </p>
          <p>
            5.创建或导入钱包： 指在您接受本协议后，使用PowerFans创建或导入钱包的过程。
          </p>
          <p>
            6.钱包密码： 指您在创建PowerFans钱包过程中，由您决定的密码，该密码将被用于加密和保护您的私钥。PowerFans作为去中心化的应用，钱包密码不存储在您的这台移动设备或本公司的服务器，一旦您丢失或忘记钱包密码，您需要借助私钥或助记词重置钱包密码。
          </p>
          <p>
            7.信息提示： PowerFans软件操作界面涉及的信息提示内容，建议用户按照相关步骤进行操作。
          </p>
          <p>
            8.特定用户： 指按照新加坡和其他国家的法律法规及政策规定必须要配合本公司履行个人信息披露义务的用户。
          </p>
          <p>
            9.私钥： 由256位随机字符构成，是用户拥有并使用数字代币的核心。
          </p>
          <p>
            10.公钥： 由私钥借助密码学原理单向推导生成，并用以生成区块链数字钱包地址，数字钱包地址即为公开收款地址。
          </p>
          <p>
            11.助记词： 符合区块链BIP39 行业标准，由随机算法生成的12（或15/18/21/24）个有序单词组成。是私钥的易记录表现形式，方便用户备份保管。
          </p>
          <p>
            12.Keystore: 是私钥或助记词经过用户设置的钱包密码加密保存的文件形式，它只存储在您的这台移动设备中，不会同步至本公司服务器。
          </p>
          <p>
            13.数字代币： 指PowerFans目前支持的数字代币种类，包括但不限于BTC、ETH、DGD等。
          </p>
          <p>
            14.资料： 指PowerFans上“浏览”、“市场”等版块的文章等资料，这些资料均为第三方所有，未经授权不得转载。这些资料仅供您参考，并不构成本公司对您交易的指导或建议。
          </p>
          <p>
            15.消息中心： 指用户可以接收本公司发出的信息或通知的收件箱。
          </p>
          <p>
            16.个人信息： 指以电子或者其他方式记录的能够单独或者与其他信息结合识别用户个人身份的各种信息，包括但不限于自然人的姓名、出生日期、身份证件号码、个人生物识别信息、住址、电话号码、银行卡号、邮件地址、钱包地址、移动设备信息、操作记录、交易记录等，但不包括用户的钱包密码、私钥、助记词、Keystore。
          </p>
          <p>
            17.智能合约： 指一种旨在以信息化方式传播、验证或执行合同的、基于以太坊的智能化合约，包括但不限于后文提及的智能合约Kyber和/或智能合约0x。PowerFans集成的智能合约目前尚不提供跨链服务。
          </p>
          <p>
            18.WETH： 指以太币代币化，因为以太币不符合自己的ERC20标准，包装以太币代币化，方便以太币直接与其他代币交易。PowerFans所支持代币与WETH的兑换比率由第三方智能合约决定。
          </p>
          <p>
            19.ETH： 指以太币，是与以太坊区块链相关的加密数字代币，为避免疑问，其不包括“以太坊经典”。
          </p>
          <p>
            <strong>三、 PowerFans服务（统称“服务”）</strong>
          </p>
          <p>
            1.创建和恢复身份。您可以使用PowerFans提供的“创建身份”、“恢复身份”按键进行身份的创建和恢复，并能在一个身份下，同时管理多链钱包。

            · &nbsp; &nbsp; &nbsp;
          </p>
          <p>
            2.导入钱包。对PowerFans支持的数字代币，您可以使用PowerFans生成新钱包或导入相关区块链系统的其它钱包工具生成的兼容钱包。
          </p>
          <p>
            3.转账、收款。您可以使用PowerFans的转账、收款功能进行数字代币的管理，即运用私钥进行电子签名，对相关区块链的账本进行修改。转账是指付款方利用收款方的ENS域名或区块链地址进行转账操作，该“转账”行为涉及在相关区块链系统的分布式账本中对该交易的有效记录（而非在PowerFans上实际交付或转让数字代币）。
          </p>
          <p>
            4.行情查看。您可以使用PowerFans查看第三方提供的数字代币汇率价格。PowerFans通过抓取相应的数字代币汇率信息并展示在PowerFans中的“市场”版块。
          </p>
          <p>
            5.管理数字代币。您可以从PowerFans操作界面添加、保管或移除PowerFans所支持的数字代币（ETH、BTC除外）。
          </p>
          <p>
            6.闪兑（IEX）。用户之间可以在第三方智能合约Kyber上发生并完成的数字代币兑换，由PowerFans 作为界面工具帮助用户和第三方智能合约交互并显示该用户之间兑换的相应结果。
          </p>
          <p>
            7.币币兑换（DEX）。用户可以与使用第三方智能合约0x的第三方进行数字代币兑换，由PowerFans 作为界面工具帮助用户和第三方智能合约交互并显示该数字代币兑换的相应结果。
          </p>
          <p>
            8.浏览DApp。用户通过PowerFans访问并使用该DApp（包括本公司自己的DApp和第三方DApp）提供的服务。
          </p>
          <p>
            9.搜索DApp。用户通过PowerFans上的搜索框，可以对已在PowerFans 罗列的DApp进行搜索。
          </p>
          <p>
            10.开发者模式。为方便开发者，在开发者模式下用户可以通过搜索框键入URL而访问任何其他网站和未在PowerFans集成的第三方DApp。
          </p>
          <p>
            11.交易记录。我们将通过区块链系统拷贝您全部或部分的交易记录。但用户应以区块链系统的最新交易记录为准。
          </p>
          <p>
            12.暂停服务。您知悉，基于区块链系统交易“不可撤销”的属性，我们不能为您撤回或撤销交易操作，但在一定情况下，我们可以暂停或者限制某位用户对PowerFans软件的操作。
          </p>
          <p>
            13.其他本公司认为有必要提供的服务。&nbsp;
          </p>
          <p>
            <strong>用户接受本公司提供的上述服务时了解并接受：</strong>
          </p>
          <p>
            1.秉承着区块链的去中心化特点，并为了保护您数字代币安全，本公司提供的是去中心化服务，大大区别于银行业金融机构。用户了解并接受，本公司 <strong>不承担</strong> 以下责任：
          </p>
          <p>
            （1）存储用户的钱包密码（即用户创建/导入钱包时设置的密码）、私钥、助记词或Keystore；
          </p>
          <p>
            （2）找回用户的钱包密码、私钥、助记词或Keystore；
          </p>
          <p>
            （3）冻结钱包；
          </p>
          <p>
            （4）挂失钱包；
          </p>
          <p>
            （5）恢复钱包；
          </p>
          <p>
            （6）交易回滚。
          </p>
          <p>
            2.您应当自行承担保管含有PowerFans的移动设备、备份PowerFans、备份钱包密码、助记词、私钥及Keystore的责任。如您遗失移动设备、删除且未备份PowerFans、删除且未备份钱包、钱包被盗或遗忘钱包密码、私钥、助记词或Keystore，本公司均无法还原钱包或找回钱包密码、私钥、助记词或Keystore；如用户进行交易时误操作（例如输错转账地址、输错兑换数额），本公司无法取消交易，且本公司亦不应对此承担任何责任。
          </p>
          <p>
            3.本公司和PowerFans所能够提供的数字代币管理服务并未包括所有已存在的数字代币，请勿通过PowerFans操作任何PowerFans不支持的数字代币。
          </p>
          <p>
            4.PowerFans上集成的DApp包括本公司自主拥有的DApp和第三方平台提供的DApp。对于第三方平台提供的DApp，PowerFans仅为用户进入DApp提供搜索和区块链浏览器功能，不对第三方DApp的功能或服务质量提供任何担保。用户在第三方DApp上接受服务或进行交易前应自行判断和评估该第三方DApp提供的服务或交易是否存在风险。
          </p>
          <p>
            5.PowerFans上提供的闪兑和币币兑换功能的实质是用户使用第三方智能合约在区块链系统上进行的数字代币兑换。对于第三方智能合约提供的服务，PowerFans仅为用户提供第三方智能合约的使用工具，不对第三方智能合约的功能或服务质量提供任何担保。用户在该第三方智能合约上接受服务或进行交易前应自行判断和评估该第三方智能合约提供的服务或交易是否存在风险。用户应仔细阅读并同意相关智能合约的不断更新的用户协议（包括但不限，Kyber用户协议：https://home.kyber.network/assets/tac.pdf；0x 常见问题：https://0xproject.com/faq）后方可进行交易。
          </p>
          <p>
            <a href="https://0xproject.com/faq）后方可进行交易。&#10;&#10;·       "></a>6.用户在PowerFans上使用开发者模式通过输入URL访问其他网站或未在PowerFans集成的第三方DApps的，应自行了解URL链接的网站和第三方DApps可能存在的安全隐患，并独立承担所有的风险和后果。
          </p>
          <p>
            <strong>四、 您的权利义务</strong>&nbsp;
          </p>
          <p>
            （一）创建或导入钱包
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;1.创建或导入钱包： 您有权在您的移动设备上通过PowerFans创建和/或导入钱包，有权设定钱包的钱包密码等信息，并有权通过PowerFans应用程序，使用自己的钱包在区块链上进行转账和收款等交易。
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;2.身份验证： 按照有关法律法规的要求，特定用户在使用PowerFans提供的有关服务时，应当按照PowerFans的提示及时完成相关身份验证，要求您提交包括但不限于您的姓名、身份证号码、手机号码、银行卡号信息等个人信息。否则该特定用户将无法使用有关服务，因特定用户拖延造成的损失由您自行承担。
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;3.本公司可能为不同的终端设备开发不同的软件版本，您应当根据实际需要选择下载合适的版本进行安装。如果您从未经合法授权的第三方获取本软件或与本软件名称相同的安装程序，本公司将无法保证该软件能否正常使用，也无法保证其安全性，因此造成的损失由您自行承担。
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;4.本软件新版本发布后，旧版软件可能无法使用。本公司不保证旧版软件的安全性、继续可用性及提供相应的客户服务。请用户随时核对并下载最新版本。&nbsp;
          </p>
          <p>
            （二）使用
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;1.您应自行承担妥善保管移动设备、钱包密码、私钥、助记词和Keystore等信息的责任。 本公司不负责为用户保管以上信息。因您遗失移动设备、主动或被动泄露、遗忘钱包密码、私钥、助记词、Keystore或遭受他人攻击、诈骗等所引起的一切风险、责任、损失、费用应由您自行承担。
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;2.PowerFans信息提示。 您了解并同意遵循本公司在PowerFans上发布的信息提示，按照信息提示的内容进行操作，否则，由此引起的一切风险、责任、损失、费用等应由您自行承担。
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;3.您知悉并理解PowerFans没有义务对链接的第三方DApp服务、第三方智能合约服务或交易履行尽职调查义务，您应当谨慎评估并承担所有与使用PowerFans有关的风险。
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;4.提供信息和文件。 如果本公司自行认为有必要获取用户的相关信息以遵循任何与使用或操作PowerFans相关的适用法律或法规的规定，用户应按照本公司的要求及时向本公司提供该等信息，且用户了解并接受，本公司可以限制、暂停或终止您使用PowerFans直到您提供满足公司要求的信息。用户承诺及时向本公司告知任何有关其依据本协议向本公司提供的文件和信息中的任何变化，且在没有通知任何变化的书面通知的情形下，本公司有权认为由用户提供的文件和信息的内容是真实、正确、没有误导信息且没有发生改变的。
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;5.完成身份验证。 当本公司合理认为您的交易行为或交易情况出现异常的，或认为您的身份信息存在疑点的，或本公司认为应核对您身份证件或其他必要文件的情形时，请您积极配合本公司核对您的有效身份证件或其他必要文件，及时完成相关的身份验证。
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;6.转账。
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;（1）您知悉对于PowerFans服务中您可使用的日计转账限额和笔数，可能因为您使用该转账服务时所处的国家/地区、监管要求、转账目的、PowerFans风险控制、身份验证等事由而不同。
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;（2）您理解基于区块链操作的“不可撤销”属性，当您使用PowerFans转账功能时，您应当自行承担因您操作失误而导致的后果（包括但不限于因您输错转账地址、您自身选择转账节点服务器的问题）。
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;（3）您知悉在使用PowerFans服务时，以下情况的出现可能导致转账功能不可用、转账“交易失败”或“打包超时”：
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a) 钱包余额不足；
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;b) 交易矿工费不足；
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;c) 区块链执行智能合约代码失败；
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;d) 超出监管部门、PowerFans或法律法规规定的付款额度；
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;e) 网络、设备等技术故障；
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;f) 区块链网络拥堵、故障等原因引起交易被抛弃；
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;g) 您的地址或交易对方地址被识别为特殊地址，如高风险地址。
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;（4）您知悉PowerFans仅向您提供转账工具，在您使用PowerFans完成转账后，本公司即完成了当次服务的所有义务，本公司对其他相关纠纷争议，不承担任何责任。
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;7.闪兑和币币兑换。 您知悉，闪兑和币币兑换的每日限额目前由第三方智能合约限定。本公司亦可能对用户每日可闪兑或币币兑换的额度进行限制并不时调整。
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;8.合法合规。 您知悉在PowerFans进行操作时或利用PowerFans上的DApp、智能合约进行交易时，您应当遵循有关法律法规、国家政策的要求。
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;9.公告通知。 PowerFans会以网站公告、电子邮件、发送短信、电话、消息中心信息、弹窗提示或客户端通知等方式向您发送通知，例如通知您交易进展情况，或者提示您进行相关操作，请您及时予以关注。
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;10.服务费用与纳税义务：
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;（1）您使用PowerFans的闪兑和币币兑换服务时，第三方智能合约会向您收取手续费和/或服务费，具体费用以第三方智能合约收取数额为准，PowerFans信息提示仅供参考；
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;（2）本公司暂时不向您收取任何形式的服务费或手续费，将来需对某些服务进行收费时本公司将另行约定或公布规则；
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;（3）您使用PowerFans进行转账时应支付“矿工费”或网络费，金额由您自行决定，并由相关区块链网络收取；
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;（4）您知悉，在特定情况（包括但不限于您在转账期间为转账支付的“矿工费”或网络费不足，或相关区块链网络不稳定）下，您的转账操作可能失败；在该等情况下，即便您的转账操作未完成，您亦会被相关区块链网络收取矿工费；
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;（5）您因在PowerFans进行交易而发生的所有应纳税负及其它方面的费用均由您负责支付。&nbsp;
          </p>
          <p>
            <strong>五、 风险提示</strong>
          </p>
          <p>
            1.您了解并知悉，由于数字代币领域的法律法规政策尚未健全，该领域的数字代币可能会产生无法兑现、技术不稳定等重大风险。您也了解数字代币的价格波动幅度远高于其他金融资产。我们谨慎提醒您应当根据自身财务状况和风险偏好，以合理的方式选择持有或处置任何一种数字代币。您也了解PowerFans提供的行情查看功能仅系抓取部分交易所的数字代币汇率信息的搜索结果，并不表示为最新行情或最佳报价。
          </p>
          <p>
            2.在使用PowerFans服务时，若您或您的相对方未遵从本协议或相关网站说明、交易、支付页面中之操作提示、规则，本公司并不保证交易会顺利完成，且本公司不承担损害赔偿责任。若发生前述情形，而款项已先行入账您的或您的交易方的PowerFans钱包或第三方钱包，您理解区块链操作具有的“不可逆”属性，以及相关交易具有“不可撤销”的特征，由您及您的相对方自行承担相应的风险后果。
          </p>
          <p>
            3.您理解并知悉，闪兑和币币兑换交易均在第三方智能合约上发生、进行并完成。PowerFans 仅作为界面工具帮助用户和第三方智能合约交互并显示该已完成交易的相应结果。
          </p>
          <p>
            4.在您使用PowerFans集成的第三方DApp、第三方智能合约服务时，本公司强烈建议您仔细阅读该第三方DApp、第三方智能合约的用户协议、隐私政策和其他相关的文件和信息等，了解交易对象及产品信息，谨慎评估风险后再在该第三方DApp、第三方智能合约上进行交易。您理解该交易和有约束力的合同关系在您和您的相对方之间建立，与本公司无关。本公司对因您的交易行为所引起的一切风险、责任、损失、费用不承担任何责任。
          </p>
          <p>
            5.当您将数字代币转给其他钱包地址时，您在交易过程中应当自行判断对方是否为完全民事行为能力人并自行决定是否与对方进行交易或转账给对方等。
          </p>
          <p>
            6.在转账过程中，如果出现“交易失败”、“打包超时”等类似的异常信息提示时，您应通过相关区块链系统的官方途径或其他的区块链查询工具进行再次确认，以避免重复转账；否则，由此所引起的一切损失和费用应由您自行承担。
          </p>
          <p>
            7.您理解当您在PowerFans上创建或导入钱包之后，您的Keystore、私钥、助记词等信息仅存储在当前的这台移动设备中，不存储在PowerFans或本公司的服务器上。您可以按照PowerFans提供的操作指南采取同步钱包等方式更换移动设备。但若您未保存或备份钱包密码、私钥、助记词、Keystore等信息且在您移动设备丢失的情况下，您的数字代币将因此丢失，本公司无法为您找回。若您在导出、保存或备份钱包密码、私钥、助记词、Keystore等信息的时候泄密，或保存或备份上述信息的设备或服务器被黑客攻击或控制等情况下，您的数字代币将因此丢失，本公司无法为您找回。因前述情形产生的任何及所有损失应由您自行承担。
          </p>
          <p>
            8.我们建议您在创建或导入钱包时对您钱包的钱包密码、私钥、助记词及Keystore等信息做好安全备份。我们提请您注意，请不要采用以下电子备份方式：截图、邮件、手机中的记事本应用、短信、微信、QQ等电子备份方式。我们建议您在纸质记事本上抄写助记词和Keystore等信息，同时您亦可将电子数据保管至密码管理器。
          </p>
          <p>
            9.我们建议您在安全的网络环境中使用PowerFans，确保您的移动设备没有越狱或root， 以避免可能存在的安全隐患。&nbsp;
          </p>
          <p>
            10.请您在使用PowerFans过程中，警惕诈骗行为。一旦发现任何可疑行为，我们鼓励您第一时间告知我们。
            &nbsp;
          </p>
          <p>
            <strong>六、 服务的变更、中断、终止</strong>
          </p>
          <p>
            1.您了解并同意本公司可以自行决定暂时提供部分服务功能，或于将来暂停部分服务功能或开通新的服务功能。当我们改变服务时，只要您仍然使用PowerFans，表示您仍然同意本协议或者本协议修正后的条款。
          </p>
          <p>
            2.为了尽可能避免任何对PowerFans的误操作或数字代币的任何安全风险，您应避免在不具备区块链基础知识的前提下使用PowerFans。对不具备区块链基础知识的用户，本公司有权拒绝提供部分或全部的服务功能。
          </p>
          <p>
            3.您理解存在如下情形时，本公司将暂停提供服务（或在发生如下情形时彻底终止服务）：
          </p>
          <p>
            （1）因设备、区块链系统维修、升级、故障和通信中断等技术原因而中断PowerFans的运营；
          </p>
          <p>
            （2）因台风、地震、海啸、洪水、停电、战争或恐怖袭击等不可抗力因素，电脑病毒、木马、黑客攻击、系统不稳定或政府行为等原因，造成本公司不能提供服务或本公司合理认为继续提供服务会有较大风险的；
          </p>
          <p>
            （3）适用法律或政策发生重大不利变化的；
          </p>
          <p>
            （4）发生本公司无法控制或合理预见的其他情形。
          </p>
          <p>
            4.当用户出现如下情况时，本公司可单方面中止或终止用户使用PowerFans的部分或全部功能:&nbsp;
          </p>
          <p>
            （1）用户死亡；
          </p>
          <p>
            （2）盗用他人的钱包信息或移动设备；
          </p>
          <p>
            （3）在PowerFans填写虚假个人信息；
          </p>
          <p>
            （4）拒绝PowerFans的强制更新操作；
          </p>
          <p>
            （5）将PowerFans用于违法或犯罪活动；
          </p>
          <p>
            （6）妨碍其他用户正常使用PowerFans；
          </p>
          <p>
            （7）伪称本公司的工作人员或管理人员；
          </p>
          <p>
            （8）攻击、侵入、更改或以任何其他方式威胁本公司计算机系统的正常运作；
          </p>
          <p>
            （9）利用PowerFans宣传垃圾广告；
          </p>
          <p>
            （10） 散布谣言，损害本公司和PowerFans商誉；
          </p>
          <p>
            （11） 违法行为，其他违反本协议的行为，及本公司合理认为应当暂停功能的情形。
          </p>
          <p>
            5.如果本公司变更、中断、终止服务时，您有权在合理时间内导出您钱包等信息。&nbsp;
          </p>
          <p>
            <strong>七、 您的陈述与保证</strong>
          </p>
          <p>
            1.您应遵守您所居住的国家或地区的法律法规，不得将PowerFans用于任何非法目的，也不得以任何非法方式使用PowerFans。

            ·
          </p>
          <p>
            2.您不得利用PowerFans从事任何违法或犯罪的行为，包括但不限于：
          </p>
          <p>
            （1）危害您所居住的国家或地区的国家安全、泄漏国家秘密、颠覆国家政权、破坏国家统一；
          </p>
          <p>
            （2）从事任何违法犯罪行为，包括但不限于洗钱、非法集资等；
          </p>
          <p>
            （3）通过使用任何自动化程序、软件、引擎、网络爬虫、网页分析工具、数据挖掘工具或类似工具等，接入本公司服务、收集或处理本公司所提供的内容，干预或试图干预任何用户；
          </p>
          <p>
            （4）提供赌博资讯或以任何方式引诱他人参与赌博；
          </p>
          <p>
            （5）侵入他人PowerFans钱包盗取数字代币；
          </p>
          <p>
            （6）进行与交易对方宣称的交易内容不符的交易，或不真实的交易；
          </p>
          <p>
            （7）从事任何侵害或可能侵害PowerFans服务系统、数据的行为；
          </p>
          <p>
            （8）其他本公司有正当理由认为不适当的行为。
          </p>
          <p>
            3.您理解并同意，如因您违反有关法律（包括但不限于海关及/或税务方面的监管规定）或者本协议之规定，使本公司遭受任何损失、受到任何第三方的索赔或任何行政管理部门的处罚，您应对本公司进行赔偿，包括合理的律师费用。
          </p>
          <p>
            4.您承诺按时缴纳本公司的服务费用（如有），否则本公司有权暂停对您提供的服务。&nbsp;
          </p>
          <p>
            <strong>八、 隐私政策</strong>
          </p>
          <p>
            您提供给我们的任何数据或信息亦受我们隐私政策（“《PowerFans隐私政策》”的约束，该隐私政策亦是本协议的一部分。
          </p>
          <p>
            <strong>九、 免责及责任限制</strong>
          </p>
          <p>
            1.本公司仅对本协议中所列明的义务承担责任。
          </p>
          <p>
            2.<strong>您理解和同意，在法律所允许的最大范围内，本公司只能按照现有的技术水平和条件提供PowerFans服务</strong>。因下列任何原因导致PowerFans无法正常提供服务，本公司不承担责任：
          </p>
          <p>
            （1）PowerFans系统停机维护或升级；
          </p>
          <p>
            （2）因台风、地震、洪水、雷电或恐怖袭击等不可抗力原因；
          </p>
          <p>
            （3）您的移动设备软硬件和通信线路、供电线路出现故障的；
          </p>
          <p>
            （4）您操作不当或未通过本公司授权或认可的方式使用本公司服务的；
          </p>
          <p>
            （5）因电脑病毒、木马、恶意程序攻击、网络拥堵、系统不稳定、系统或设备故障、通讯故障、电力故障、银行或政府行为等原因；
          </p>
          <p>
            （6）非因本公司的原因而引起的任何其它原因。
          </p>
          <p>
            3.本公司对以下任何情形均不承担责任：
          </p>
          <p>
            （1）因您遗失移动设备、删除且未备份PowerFans、删除且未备份钱包、遗忘且未备份钱包密码、私钥、助记词、Keystore而导致该用户的数字代币丢失；
          </p>
          <p>
            （2）因您自行泄露钱包密码、私钥、助记词、Keystore，或借用、转让或授权他人使用自己的移动设备或PowerFans钱包，或未通过本公司官方渠道下载PowerFans应用程序或以其他不安全的方式使用PowerFans应用程序导致的您的数字代币丢失；
          </p>
          <p>
            （3）因您误操作（包括但不限于您输错转账地址、您自身选择转账节点服务器的问题）PowerFans导致的数字代币丢失；
          </p>
          <p>
            （4）因您不理解区块链技术的知识而进行误操作导致的您的数字代币丢失；
          </p>
          <p>
            （5）因系统滞后、区块链系统不稳定等原因导致本公司拷贝用户在区块链上的交易记录发生偏差；
          </p>
          <p>
            4.每位用户应承担由下列情形产生或与之相关的风险和后果：
          </p>
          <p>
            （1）该用户在第三方DApp、第三方智能合约上操作的交易；
          </p>
          <p>
            （2）用户使用开发者模式；
          </p>
          <p>
            （3）用户使用闪兑和币币兑换服务，该等风险和后果应由您和相关智能合约发行方承担。
          </p>
          <p>
            5.您理解PowerFans仅作为您数字代币管理的工具。本公司不能控制第三方DApp、第三方智能合约提供的产品及服务的质量、安全或合法性，信息的真实性或准确性，以及相对方履行其在与您签订的协议项下的各项义务的能力。您自行决定是否在第三方DApp、第三方智能合约进行交易。您理解该交易和有约束力的合同关系在您和您的相对方之间建立，与本公司无关。本公司提醒您在使用DApp、智能合约前，应谨慎判断第三方DApp、第三方智能合约所提供相关信息的真实性、合法性和有效性。此外，您与任何第三方交易所产生的全部风险亦应由您自行承担。
          </p>
          <p>
            6.您知悉本公司可能同时为您及您的交易对手方提供服务或与之有关联关系或其他利益相关的关系，您同意对本公司可能存在的该等行为予以明确豁免任何实际或潜在的利益冲突，并不得以此来主张本公司在提供服务时存在法律上的瑕疵，也不因此而加重本公司的责任或注意义务。
          </p>
          <p>
            7.本公司不提供以下形式的保证：
          </p>
          <p>
            （1）本公司提供的服务将符合您的全部需求；
          </p>
          <p>
            （2）您经由本公司服务取得的任何技术、产品、服务、资讯或其他材料将符合您的期望；
          </p>
          <p>
            （3）本公司从第三方交易所抓取的数字代币市场交易行情等信息的及时性、准确性、完整性、可靠性；
          </p>
          <p>
            （4）您在PowerFans上的交易对方会及时履行其在与您达成的交易协议中的各项义务。
          </p>
          <p>
            8.在任何情况下，本公司对本协议所承担的违约赔偿责任总额不超过1）0.1个以太币的市场价值；或2）新加坡元100元，以较高的为准。
          </p>
          <p>
            9.您理解PowerFans仅作为用户管理数字代币、显示交易信息的工具，本公司不提供法律、税务或投资建议等服务。您应当自行向法律、税务、投资方面的专业人士寻求建议，且您在使用我们服务过程中所遭受的投资损失、数据损失等，本公司概不负责。
          </p>
          <p>
            10.您理解根据适用法律法规的要求，我们可能不时更改我们的用户准入标准，限定向特定用户等提供服务的范围和方式等。&nbsp;
          </p>
          <p>
            <strong>十、 其他条款</strong>
          </p>
          <p>
            1.不得转让。 在符合本协议条款的情况下，只有您（而非其他人）有权向我们主张与使用服务相关的索赔。您不得转让、交易，或试图转让、交易您对该索赔的权利。任何该等转让行为均为无效，且我们对受让方不承担任何义务或责任。
          </p>
          <p>
            2.知识产权。 PowerFans系本公司开发并拥有知识产权的应用程序。 PowerFans中显示的任何内容（包括本协议、公告、文章、视频、音频、图片、档案、资讯、资料、商标或标识）的知识产权归本公司或第三方权利人所有。用户仅可为持有和管理数字代币之目的使用PowerFans应用程序及其中的内容。未经本公司或第三方权利人的事先书面同意，任何人不得擅自使用、修改、反向编译、复制、公开传播、改变、散布、发行或公开发表上述应用程序及内容。本协议不应被视为授予您任何知识产权，包括出于任何目的使用与我们或服务相关的任何信息、图片、用户界面、标识、商标、商业名称、网络域名或版权的权利。
          </p>
          <p>
            3.非弃权。 任何我们未执行本协议或未向您主张我们在本协议项下的权利、索赔或诉因的行为均不被视为放弃我们向您主张任何权利、索赔或诉因的权利。
          </p>
          <p>
            4.完整协议：
          </p>
          <p>
            （1）本协议由 《PowerFans服务协议》、《PowerFans隐私政策》 及本公司不时公布的各项规则（包括“帮助中心”的内容）组成。
          </p>
          <p>
            （2）除了本协议中的 《PowerFans服务协议》 、《PowerFans隐私政策》 外，本协议包含我们之间关于使用PowerFans和相关服务的全部协议和谅解，并取代所有先前的（口头的和书面的）协议、谅解或安排。
          </p>
          <p>
            5.税款：
          </p>
          <p>
            （1）使用本协议下的服务不含您在任何法域就您使用本服务所适用、产生、有关的税款（“应纳税款”）。
          </p>
          <p>
            （2）您应负责确定任何应纳税款，并向合适的税务机关申报、代扣、收集、报告和代缴正确的应纳税款。您应自行承担因未完成或未履行您的任何与应纳税款相关的义务而产生的所有处罚、索赔、罚款、惩罚和其他责任。
          </p>
          <p>
            （3）我们不负责确定任何应纳税款，亦不负责向合适的税务机关申报、代扣、收集、报告和代缴正确的应纳税款。
          </p>
          <p>
            6.法律适用和争议解决：
          </p>
          <p>
            （1）本协议适用新加坡共和国法律，并应据此解释。
          </p>
          <p>
            （2）因本协议引起的或与之相关的任何争议（包括任何有关其存在、有效性、终止的问题），双方应首先寻求和解。如果该争议在该和解程序开始后的30天内仍未解决，双方应将该争议提交至新加坡国际仲裁中心（简称 “SIAC”），并通过遵循新加坡国际仲裁中心届时有效的仲裁规则（该规则被视为通过引用并入本条款），最终以仲裁的方式在新加坡予以解决。仲裁庭由一名仲裁员组成，由SIAC主席任命。仲裁语言为英语。每一方不可撤销地接受新加坡法院之非专属管辖权，以支持和协助根据本段前述内容进行的仲裁程序，包括在该程序的结果作出之前给予临时救济（如必要）。
          </p>
          <p>
            7.《合同（第三方权利）法》 。新加坡共和国的《合同（第三方权利）法》（第53B章）（可能不时被修改、修订或补充）应适用于本协议。非本协议一方的人士不得拥有本协议项下的任何权利，也无权执行本协议。
          </p>
          <p>
            8.独立性和部分无效：
          </p>
          <p>
            （1）本协议的任何部分被任何约束本协议的立法认为无效、非法或不可执行时，其仅在该范围（且不得进一步扩展）内被视为无效、非法或不可执行。为避免疑问，本协议的剩余部分将继续有效并保持充分的效力。
          </p>
          <p>
            （2）根据任何司法管辖区的法律，本协议任何条款被认定为非法、无效或不可执行的情形不得影响该条款依据其他司法管辖区的法律被认定为合法、有效或可执行，亦不得影响本协议其他条款的合法性、有效性或可执行性。
          </p>
          <p>
            9.本协议译本。本协议的任何译本（如有）仅为方便用户而提供，无意对本协议的英文版本进行修改。如果本协议的英文版本与非英文版本之间存在冲突，应以英文版本为准。&nbsp;
          </p>
          <p>
            <strong>十一、 其它</strong>
          </p>
          <p>
            1.您应当全面了解并遵守您所在司法辖区与使用服务所有相关法律、法规及规则。
          </p>
          <p>
            2.您在使用服务过程中，如遇到任何问题，您可以通过在PowerFans提交反馈等方式联系我们。
          </p>
          <p>
            3.所有的用户可以在PowerFans中查看本协议。 本公司鼓励您在每次访问PowerFans时都查阅本协议。
          </p>
          <p>
            4.本协议自2018年5月22日起生效。&nbsp;
          </p>
          <p>
            本协议未尽事宜，您需遵守本公司不时更新的公告及相关规则。&nbsp;
          </p>
          <p>
            PowerFans PTE. LTD.&nbsp;
          </p>
          <p>
            &nbsp;（公司注册号：201800958N）&nbsp;
          </p>
        </div>
      </div>
    )
  }
}
export default Agreement
