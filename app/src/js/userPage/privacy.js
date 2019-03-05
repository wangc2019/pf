import {Component} from "react";
import React from "react"
import back from "../../img/back.png";
import "../../css/about.css"
import logo from "../../img/user/bibilogo.png"
import jump from "../../img/user/right.png"
import { hashHistory ,browserHistory} from "react-router";

class Privacy extends Component {
  goBack(){
    hashHistory.goBack()
  }
  render(){
    return(
      <div className="about">
        <div className="header"><img src={back} onClick={this.goBack.bind(this)} alt=""/>隐私条款</div>
        <div className="content">
          <p >
            <strong>PowerFans隐私政策</strong>
          </p>
          <p>
            最近更新于：2018年5月22日
          </p>
          <p>
            尊敬的用户：
          </p>
          <p>
            PowerFans PTE, LTD.（以下简称“本公司”或“我们”）尊重并保护用户（以下简称“您”或“用户”）的隐私，当您进行以下行为时，本公司按照本隐私政策（以下简称“本政策”）收集、披露和处理您的个人信息：
          </p>
          <p>
            (a)进入或使用我们的网站或移动应用（“应用”）及服务；&nbsp;
          </p>
          <p>
            (b)向我们提供您的个人信息，无论通过何种媒介提供。&nbsp;
          </p>
          <p>
            本公司建议您在使用应用之前仔细阅读并理解本政策全部内容, 针对免责声明等条款在内的重要信息将以加粗的形式体现。本政策有关关键词定义与本公司《PowerFans服务协议》保持一致。如果本政策中使用的定义或术语与《PowerFans服务协议》中的不一致，以本政策为准。&nbsp;
          </p>
          <p>
            您向我们提供您的个人信息，即代表您同意我们根据本政策的规定收集、使用、披露（包括传输）和处理您的个人信息。如您不接受本政策，请勿 向我们提供任何个人信息。 &nbsp;&nbsp;
          </p>
          <p>
            本政策可由本公司在线随时更新，不另行通知。更新后的政策一经公布在我们的应用上即为生效，并代替原来的政策。修改后的政策将立刻适用于您向我们提供的个人信息。如果您不接受修改后的条款，请立即停止使用应用，您继续使用应用将被视为接受修改后的政策。&nbsp;
          </p>
          <p>
            <strong>一、我们收集您的哪些信息</strong>&nbsp;
          </p>
          <p>
            1.我们将收集您的移动设备信息、操作记录、交易记录、钱包地址等个人信息。
          </p>
          <p>
            2.为满足您的特定服务需求，我们将收集您的个人信息，包括但不限于您的姓名、银行卡号、手机号码、邮件地址等信息。&nbsp;
          </p>
          <p>
            3.您知悉：您在应用上的钱包密码、私钥、助记词、Keystore并不存储或同步至本公司服务器。本公司不提供找回您的钱包密码、私钥、助记词、Keystore的服务。&nbsp;
          </p>
          <p>
            4.我们可能要求向您收集更多的个人信息，以使得您可以使用应用上的某些特定功能。如您不同意提供该等个人信息，则视为您放弃使用应用的特定功能。&nbsp;
          </p>
          <p>
            5.在法律法规允许的范围内，本公司可能会在以下情形中收集并使用您的个人信息，且无需征得您的授权同意：
          </p>
          <p>
            （1）与国家安全、国防安全有关的；&nbsp;
          </p>
          <p>
            （2）与公共安全、公共卫生、重大公共利益有关的；&nbsp;
          </p>
          <p>
            （3）与犯罪侦查、起诉、审判和判决执行等有关的；&nbsp;
          </p>
          <p>
            （4）所收集的个人信息处于公共领域；&nbsp;
          </p>
          <p>
            （5）从合法公开披露的信息中收集您的个人信息，如合法的新闻报道，政府信息公开等渠道；&nbsp;
          </p>
          <p>
            （6）用于维护服务的安全和合规所必需的，例如发现、处理产品和服务的故障；&nbsp;
          </p>
          <p>
            （7）法律法规允许的其他情形。&nbsp;
          </p>
          <p>
            6.我们收集信息的方式如下：&nbsp;
          </p>
          <p>
            （1）当您主动向我们提供信息，无论以何种理由；&nbsp;
          </p>
          <p>
            （2）当您授权我们向第三方获取您的信息；&nbsp;
          </p>
          <p>
            （3）您使用我们的应用和服务；&nbsp;
          </p>
          <p>
            （4）当您通过各种交流渠道与我们的员工联系或互动，例如通过社交平台、通讯平台、当面会议、电话、邮件、传真和书信等；&nbsp;
          </p>
          <p>
            （5）当您与我们发生交易、与我们联系或要求我们联系您；&nbsp;
          </p>
          <p>
            （6）当您要求订阅我们的邮件；&nbsp;
          </p>
          <p>
            （7）我们通过区块链系统，拷贝您全部或部分的交易记录。但您的交易记录应当以区块链系统的记载为准。&nbsp;
          </p>
          <p>
            7.我们的应用可能包含一些收集个人信息的技术，具体的收集方式将在本政策（见下文第五条）或适用的条款和条件中说明。&nbsp;
          </p>
          <p>
            8.您向我们提供个人信息系您的主动行为，您可以随时撤回同意。但是，如您选择拒绝向我们提供我们要求的个人信息，您可能无法使用应用，我们可能无法与您联系或向您提供您需要的产品或服务。&nbsp;
          </p>
          <p>
            9.在某些情况下，您可能向我们提供非您本人的个人信息。如您提供他人信息，您应当保证您已获得该等信息主体的同意，允许我们收集该信息主体的个人信息，并且信息主体同意您向我们披露其个人信息。您同意，如该等信息主体就我们根据本政策条款收集、使用和披露其个人信息向我们提出索赔，您将向我们进行赔偿并使我们免责。
          </p>
          <p>
            &nbsp;10.您应确保您向我们提供的个人信息真实、准确和完整。在您的个人信息发生变化时，您应当通知我们。 &nbsp;&nbsp;
          </p>
          <p>
            二、我们如何使用您的信息
          </p>
          <p>
            1.我们将出于以下一个或多个目的收集、使用或披露您的个人信息：
          </p>
          <p>
            （1）向您提供您要求的产品和/或服务；
          </p>
          <p>
            （2）处理您与我们的关系；&nbsp;
          </p>
          <p>
            （3）促进您的使用体验；&nbsp;
          </p>
          <p>
            （4）通过您移动设备的唯一序列号，确认您与您的钱包的对应关系；
          </p>
          <p>
            （5）向您及时发送重要通知，如软件更新、服务协议及本政策条款的变更；&nbsp;
          </p>
          <p>
            （6）通过钱包地址和提供的移动设备信息，协助您处理您的提问、反馈、投诉和要求；&nbsp;
          </p>
          <p>
            （7）告知您我们的产品、服务、项目和活动；
          </p>
          <p>
            （8）解决争议、调查任何投诉、索赔或争议、或任何实际或可以的非法行为；&nbsp;
          </p>
          <p>
            （9）进行本公司内部审计、数据分析和研究；
          </p>
          <p>
            （10）通过跟踪用户对应用的使用情况进行用户行为分析；&nbsp;
          </p>
          <p>
            （11）遵守法律法规规定及与监管机构的要求；&nbsp;
          </p>
          <p>
            （12）遵守国际法律法规对于安全以及反洗钱或反恐的要求；&nbsp;
          </p>
          <p>
            （13）履行我们的义务以及合同条款条件；&nbsp;
          </p>
          <p>
            （14）任何与前述目的有关的合理目的。&nbsp;
          </p>
          <p>
            2.如您同意，我们将为其他目的不时使用您的个人信息，例如告知您我们的战略合作伙伴或关联方推出的最新的活动、优惠和推广信息。&nbsp;
          </p>
          <p>
            3.我们在PowerFans的“系统设置”中为您提供“指纹登录”选项，让您方便且更安全地管理您的数字代币。 &nbsp;&nbsp;
          </p>
          <p>
            <strong>三、您如何控制自己的信息&nbsp;</strong>
          </p>
          <p>
            您在应用中拥有以下对您个人信息自主控制权：&nbsp;
          </p>
          <p>
            1.您可以通过同步钱包的方式，将您的其他钱包导入应用中，或者将您在应用的钱包导入到其他数字代币管理钱包中。应用将向您显示导入钱包的信息。
          </p>
          <p>
            2.您知悉您可以通过“资产”版块内容修改您的数字代币种类、进行转账及收款等活动。&nbsp;
          </p>
          <p>
            3.您知悉在应用“我”的版块您可以自由选择进行如下操作：&nbsp;
          </p>
          <p>
            （1）在“使用设置”中，您可以选择不开启“指纹登录”选项，即您可以选择不使用苹果公司提供的Touch ID验证服务；&nbsp;
          </p>
          <p>
            （2）在“提交反馈”中，您可以随时向我们提出您对应用问题及改进建议，我们将非常乐意与您沟通并积极改进我们的服务。&nbsp;
          </p>
          <p>
            4.您知悉，您及我们对于您交易记录是否公开并没有控制权，因为基于区块链交易系统的开源属性，您的交易记录在整个区块链系统中公开透明。&nbsp;
          </p>
          <p>
            5.我们的应用将包含链接，可链接至非由我们所有、运营、开发或维护的其他网站、应用或智能合约。这些链接系为您方便而提供。本政策仅适用于我们的应用。当您访问该等第三方网站或使用第三方应用或智能合约时，您知悉，我们的《PowerFans服务协议》、《PowerFans隐私政策》将不再适用。我们建议您详细阅读并了解其隐私规则和有关用户服务协议等内容。&nbsp;
          </p>
          <p>
            6.您有权要求我们更新、更改、删除您的个人信息和/或撤回您给予我们的同意。如果您希望撤回您曾给予我们的同意，或如您希望更新、更改、删除或访问我们持有的个人信息，或您不接受我们对于本政策的修改，您可以联系：&nbsp;
          </p>
          <p>
            姓名：Blue Yang &nbsp;&nbsp;
          </p>
          <p>
            邮件地址：blue@token.im&nbsp;
          </p>
          <p>
            7.为使您管理由我们持有的个人信息，或使您获得有关我们在您提出该等请求前一年内的时间使用（或可能使用）您的个人信息的方式，我们可能向您收取一定的费用。如果我们向您收费，我们将提前告知您收费金额，并在您付费之后满足您的请求。我们将尽力在您提出请求后的三十（30）日内答复您。如果我们无法在三十（30）日内答复，我们将告知您具体的答复时间。&nbsp;
          </p>
          <p>
            8.在许多情况下，我们需要获得您的个人信息，以使得我们可以向您提供您要求的产品或服务。如您选择拒绝向我们提供我们要求的个人信息或撤回曾给予我们的同意，我们可能无法继续向您提供您要求的产品和服务。&nbsp;
          </p>
          <p>
            <strong>四、我们可能分享或传输您的信息&nbsp;</strong>
          </p>
          <p>
            1.我们将为业务和法律的目的存储您的个人信息。 ·&nbsp; &nbsp; &nbsp;&nbsp;
          </p>
          <p>
            2.未经过您的同意，我们不会向第三方出售、交易或转让您的个人信息。
          </p>
          <p>
            3.如果您同意我们向战略合作方或关联方披露您的个人信息，我们可能将您的个人信息披露给该等实体。该等实体将仅为您已同意的目的使用您的个人信息。&nbsp;
          </p>
          <p>
            4.您同意，我们可能向以下第三方披露或共享您的个人信息：
          </p>
          <p>
            （1）代表我们并向我们提供服务的服务提供商和数据处理方，例如为我们进行KYC检查、会计、数据处理或管理服务、网站托管、维护及运营服务、邮件信息服务、分析服务、支付交易处理、市场营销等；
          </p>
          <p>
            （2）我们的咨询师和专业顾问（例如会计师、律师、审计师）。
          </p>
          <p>
            5.如果为了上述的目的，我们需要将您的个人信息传输至任何其他国家，我们将获得您的同意，并且确保个人信息的接收方具备和我们同等级的个人信息保护措施。如果该等国家或地区尚无可适用于我们与您之间关系的个人信息保护法律，我们将与个人信息接收方签订可合法执行的协议。
          </p>
          <p>
            6.未经您事先同意，本公司不会将您的个人信息向任何第三方共享或转让，但以下情况除外：
          </p>
          <p>
            （1）所收集的个人信息是您自行向社会公众公开的；
          </p>
          <p>
            （2）所收集的个人信息系从合法公开披露的信息中收集，如合法的新闻报道，政府信息公开等渠道；
          </p>
          <p>
            （3）根据适用的法律法规、法律程序的要求、行政机关或司法机关的要求进行提供或执行本政策以保护我们或其他方的权利、财产或安全；
          </p>
          <p>
            （4）在涉及合并、收购时，如涉及到个人信息转让，本公司将要求个人信息接收方继续接受本政策的约束。&nbsp;
          </p>
          <p>
            <strong>五、自动数据收集技术</strong>
          </p>
          <p>
            1.我们在应用中使用自动数据收集技术。例如：
          </p>
          <p>
            （1）Cookies（或浏览器cookies）。Cookies是网站或应用运营方设置的小型文本文件，以识别您的浏览器或设备。我们可能在我们的应用上使用cookies技术存储并跟踪信息，例如用户数量及使用频率、用户分布以及用户的线上偏好。cookies不抓取能够识别您身份的信息，但其收集的信息可协助我们对应用的使用情况进行分析，以提高您的使用体验。您可以在浏览器设置中关闭cookies。但是，这可能影响应用的功能。
          </p>
          <p>
            （2）网络分析。网络分析是收集、评估网页和移动应用访问者行为的一种方法。这包括对流量模式进行分析，例如确定网站或移动应用某部分功能的访问频率，或用以了解访问者最感兴趣的信息或服务。我们的应用使用的是第三方工具提供的网络分析服务。&nbsp;
          </p>
          <p>
            <strong>六、我们如何保护您的信息</strong>
          </p>
          <p>
            1.如本公司停止运营，本公司将停止继续收集您个人信息的活动，并采取措施对所持有的您的个人信息在合理期限内进行删除或匿名化处理。 · &nbsp; &nbsp; &nbsp;
          </p>
          <p>
            2.为了保护您的个人信息，本公司将采取数据安全技术措施，提升内部合规水平，增加内部员工信息安全培训，并对相关数据设置安全访问权限等方式安全保护您的隐私信息。
          </p>
          <p>
            3.我们将在PowerFans“消息中心”中向您发送有关信息安全的消息，并不时在PowerFans“帮助中心”版块更新钱包使用及信息保护的资料，供您参考。&nbsp;
          </p>
          <p>
            <strong>七、对未成年人的保护 我们对保护未满18周岁的未成年人做出如下特别约定：</strong>
          </p>
          <p>
            1.未成年人应当在父母或监护人指导下使用本公司相关服务。 · &nbsp; &nbsp; &nbsp;&nbsp;
          </p>
          <p>
            2.我们建议未成年人的父母和监护人应当在阅读本政策、《PowerFans服务协议》及我们的其他有关规则的前提下，指导未成年人使用应用。
          </p>
          <p>
            3.本应用将根据适用的法律法规的规定保护未成年人的个人信息的保密性及安全性。&nbsp;
          </p>
          <p>
            <strong>八、免责声明</strong>
          </p>
          <p>
            1.您确认，您接入第三方网页、应用或智能合约之后，本政策将不再适用于该等第三方对您个人信息的收集、使用、披露和传输行为。本公司无法保证该等第三方网站、应用或智能合约会采取合理的安全保护措施。
          </p>
          <p>
            2.您将自行对使用该等第三方网站、应用和/或智能合约的行为承担责任，并且您同意，如第三方网站、应用或智能合约收集、使用、披露和传输您个人信息，导致您受到损失或损害的，您不得要求本公司承担责任。
          </p>
          <p>
            3. 您确认并接受，在适用的法律允许的最大限度下，本公司将在现有技术水平条件下，基于“根据现状”、“根据可用”、“不保证无瑕疵”的原则，尽可能采取合理的安全措施保护您的个人信息，以避免信息的泄露、篡改或者毁损。本公司系利用无线方式传输数据，因此，本公司无法确保通过无线网络传输数据的隐私性和安全性。&nbsp;
          </p>
          <p>
            <strong>九、其他</strong>
          </p>
          <p>
            1.您需全面了解并遵守您所在司法辖区与使用本公司服务所有相关法律、法规及规则。<br/>
          </p>
          <p>
            2.本政策及其修订版之效力、解释、变更、执行与争议解决均适用新加坡法律，如无相关法律规定，则应当适用国际商业惯例和（或）行业惯例。若您和本公司之间就本政策发生任何纠纷或争议，首先应友好协商解决，协商不成的，任何一方可提交新加坡有管辖权的法院管辖。
          </p>
          <p>
            3.您可以在我们的应用中查看本政策及本公司其他服务规则。我们鼓励您在每次访问应用时都查阅本公司的服务协议及隐私政策。
          </p>
          <p>
            4.本政策的任何译文版本仅为方便用户而提供，无意对本政策的条款进行修改。如果本政策的英文版本与非英文版本之间存在冲突，应以英文版本为准。
          </p>
          <p>
            5.本政策自2018年5月22日起适用。&nbsp;
          </p>
          <p>
            本政策未尽事宜，您需遵守本公司不时更新的公告及相关规则。&nbsp;
          </p>
          <p>
            PowerFans PTE. LTD.&nbsp;
          </p>
          <p>
            （公司注册号：201800958N）
          </p>
          <p>
            <br/>
          </p>
        </div>
      </div>
    )
  }
}
export default Privacy